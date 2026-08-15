import { useEffect } from "react"

const TARGET_SELECTOR = [
  ".hero__title",
  ".section-title",
  ".court-record__title",
  ".verdict-card__title",
  ".solution-card__title",
  ".pull-quote",
].join(",")

const CHAR_CLASS = "ll-char"
const MAX_DELAY_INDEX = 16

function splitIntoLetters(el) {
  if (el.hasAttribute("data-letters")) return
  el.setAttribute("data-letters", "true")

  const originalText = (el.textContent ?? "").trim()
  if (originalText && !el.hasAttribute("aria-label")) {
    el.setAttribute("aria-label", originalText)
  }

  const textNodes = Array.from(el.childNodes).filter((n) => n.nodeType === Node.TEXT_NODE)

  for (const node of textNodes) {
    const text = node.textContent ?? ""
    if (!text.trim()) continue

    const frag = document.createDocumentFragment()
    let index = 0
    for (const ch of text) {
      const span = document.createElement("span")
      span.className = CHAR_CLASS
      span.setAttribute("aria-hidden", "true")
      span.textContent = ch === " " ? "\u00A0" : ch
      span.style.setProperty("--char-i", String(Math.min(index, MAX_DELAY_INDEX)))
      index += 1
      frag.appendChild(span)
    }
    node.parentNode?.replaceChild(frag, node)
  }
}

export default function LetterLift() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    document.querySelectorAll(TARGET_SELECTOR).forEach(splitIntoLetters)
  }, [])

  return null
}
