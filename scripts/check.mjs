import { chromium } from "playwright"

const PORT = 5199
const errors = []
const warnings = []

async function scrollThrough(page) {
  await page.evaluate(async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms))
    const pass = async (dir) => {
      const max = document.body.scrollHeight - window.innerHeight
      for (let y = 0; y <= max + 1; y += 90) {
        window.scrollTo(0, dir === "down" ? y : max - y)
        await wait(30)
      }
    }
    await pass("down")
    await pass("up")
    await pass("down")
    window.scrollTo(0, document.body.scrollHeight)
    await wait(900)
  })
}

async function runViewport(browser, width, height) {
  const page = await browser.newPage({ viewport: { width, height } })
  page.on("pageerror", (err) => errors.push(`[${width}] PAGEERROR: ${err.message}`))
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`[${width}] CONSOLE ERROR: ${msg.text()}`)
    if (msg.type() === "warning") warnings.push(`[${width}] CONSOLE WARN: ${msg.text()}`)
  })
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle" })
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement
    return { scrollW: doc.scrollWidth, innerW: window.innerWidth }
  })
  await page.close()
  return { width, ...overflow }
}

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
page.on("pageerror", (err) => errors.push(`PAGEERROR: ${err.message}`))
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(`CONSOLE ERROR: ${msg.text()}`)
  if (msg.type() === "warning") warnings.push(`CONSOLE WARN: ${msg.text()}`)
})

await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle" })
await scrollThrough(page)

const revealRescue = await page.evaluate(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms))
  const stuck = [...document.querySelectorAll(".reveal:not(.is-visible)")]
  for (const el of stuck) {
    el.scrollIntoView({ block: "center" })
    await wait(300)
  }
  await wait(400)
  return {
    total: document.querySelectorAll(".reveal").length,
    visible: document.querySelectorAll(".reveal.is-visible").length,
    stillHidden: [...document.querySelectorAll(".reveal:not(.is-visible)")].length,
  }
})

const report = await page.evaluate(() => {
  const imgs = [...document.querySelectorAll("img")].map((img) => ({
    alt: img.alt,
    loaded: img.complete && img.naturalWidth > 0,
  }))
  const navDots = document.querySelectorAll(".nav-dots__dot").length
  const revealCount = document.querySelectorAll(".reveal").length
  const visibleReveals = document.querySelectorAll(".reveal.is-visible").length
  const petalsCanvas = !!document.querySelector("canvas.petals")
  const seals = document.querySelectorAll(".seal").length
  const turnLabels = document.querySelectorAll(".debate-card__turn").length
  const banners = document.querySelectorAll(".debate-banner").length
  const heroRoman = !!document.querySelector(".hero__roman")
  const caseNo = document.body.innerText.includes("SỐ: 01/2026/GĐ-TT")
  const motherSvg = document.querySelector(".char-card--mother svg")?.innerHTML || ""
  const lanSvg = document.querySelector(".char-card--lan svg")?.innerHTML || ""
  const judgeSvg = document.querySelector(".char-card--judge svg")?.innerHTML || ""
  const mcSvg = document.querySelector(".char-card--mc svg")?.innerHTML || ""
  const iconsDistinct = new Set([motherSvg, lanSvg, judgeSvg, mcSvg]).size === 4
  const courtGavel = !!document.querySelector(".court-gavel img")
  const text = document.body.innerText
  const hasFullPullQuote = text.includes("Có thể sống riêng về không gian, nhưng không sống riêng về trách nhiệm và tình cảm.")
  return {
    imgs,
    navDots,
    revealCount,
    visibleReveals,
    petalsCanvas,
    seals,
    turnLabels,
    banners,
    heroRoman,
    caseNo,
    iconsDistinct,
    courtGavel,
    hasFullPullQuote,
  }
})

const viewports = []
for (const [w, h] of [[390, 844], [768, 1024], [1100, 800], [1440, 900]]) {
  viewports.push(await runViewport(browser, w, h))
}

await browser.close()

console.log("PAGEERRORS:", errors.length ? errors.join("\n") : "none")
console.log("CONSOLE WARNINGS:", warnings.length ? warnings.join("\n") : "none")
for (const img of report.imgs) console.log(img.loaded ? "OK  " : "BROKEN", img.alt)
console.log("navDots:", report.navDots)
console.log("reveal visible:", report.visibleReveals, "/", report.revealCount)
console.log("reveals fire when scrolled into view:", revealRescue.stillHidden === 0 ? `OK (${revealRescue.visible}/${revealRescue.total})` : `FAIL stillHidden=${revealRescue.stillHidden}`)
console.log("petals canvas:", report.petalsCanvas)
console.log("seals:", report.seals, "(expect 0)")
console.log("debate turn labels:", report.turnLabels, "(expect 7)")
console.log("debate banners:", report.banners, "(expect 2)")
console.log("hero roman numeral:", report.heroRoman)
console.log("case number:", report.caseNo)
console.log("4 distinct character icons:", report.iconsDistinct)
console.log("court gavel image:", report.courtGavel)
console.log("pull quote intact:", report.hasFullPullQuote)
for (const v of viewports) {
  const ok = v.scrollW <= v.innerW + 1
  console.log(`overflow @${v.width}px: ${ok ? "OK" : `FAIL scrollW=${v.scrollW} innerW=${v.innerW}`}`)
}
