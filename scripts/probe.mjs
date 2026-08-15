import { chromium } from "playwright"

const PORT = 5199
const browser = await chromium.launch()

async function probe(vp) {
  const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } })
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle" })
  await page.waitForTimeout(500)
  const data = await page.evaluate(() => {
    const rect = (el) => {
      if (!el) return null
      const r = el.getBoundingClientRect()
      return { top: Math.round(r.top), bottom: Math.round(r.bottom), h: Math.round(r.height) }
    }
    const hero = document.querySelector(".hero")
    const heroInner = document.querySelector(".hero__inner")
    const scrollHint = document.querySelector(".hero__scroll-hint")
    const meta = document.querySelector(".hero__meta")
    const seal = document.querySelector(".hero__seal")
    const title = document.querySelector(".hero__title")
    const overflowers = [...document.querySelectorAll(".hero *")].filter(
      (el) => el.scrollWidth > el.clientWidth + 2,
    ).length

    const debateCards = [...document.querySelectorAll(".debate-card")].map((c) => {
      const r = c.getBoundingClientRect()
      const spine = document.querySelector(".debate").getBoundingClientRect()
      const spineX = spine.left + spine.width / 2
      const inside = r.right < spineX && r.left > spine.left
      const textOverflow = [...c.querySelectorAll("p, h3")].some((p) => p.scrollWidth > p.clientWidth + 2)
      return { top: Math.round(r.top + window.scrollY), insideCol: inside, textOverflow }
    })

    const charCards = [...document.querySelectorAll(".char-card")].map((c) => {
      const r = c.getBoundingClientRect()
      return { h: Math.round(r.height), w: Math.round(r.width) }
    })

    const titleLines = (() => {
      const prev = title.style.height
      title.style.height = "auto"
      const h = title.getBoundingClientRect().height
      title.style.height = prev
      return Math.round(h / parseFloat(getComputedStyle(title).lineHeight))
    })()

    const doc = document.documentElement
    return {
      heroH: rect(hero).h,
      heroInnerH: rect(heroInner).h,
      scrollHint: rect(scrollHint),
      meta: rect(meta),
      seal: rect(seal),
      titleH: rect(title).h,
      titleLines,
      overflowers,
      bodyScroll: document.body.scrollHeight,
      debateCards,
      charCards,
      hasOverflowX: doc.scrollWidth - doc.clientWidth,
    }
  })
  await page.close()
  return data
}

for (const vp of [{ name: "desktop", w: 1280, h: 800 }, { name: "mobile", w: 390, h: 844 }]) {
  const d = await probe(vp)
  console.log(`\n=== ${vp.name} ===`)
  console.log("heroH:", d.heroH, "innerH:", d.heroInnerH)
  console.log("hero seal:", JSON.stringify(d.seal), "meta:", JSON.stringify(d.meta), "hint:", JSON.stringify(d.scrollHint))
  console.log("titleH:", d.titleH, "lines:", d.titleLines, "| overflow el in hero:", d.overflowers)
  console.log("body scrollHeight:", d.bodyScroll, "overflowX:", d.hasOverflowX)
  console.log("debate cards inside col:", d.debateCards.every((c) => c.insideCol), d.debateCards)
  console.log("char card sizes:", d.charCards.map((c) => `${c.w}x${c.h}`).join(" | "))
}

await browser.close()
