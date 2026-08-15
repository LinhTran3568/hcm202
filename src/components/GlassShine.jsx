import { useEffect } from "react"

const SELECTORS = [
  ".speech-card",
  ".court-record",
  ".note-card",
  ".verdict-card",
  ".hcm-block",
  ".hcm-frame",
  ".poll-intro",
  ".poll-card",
  ".solution-card",
  ".group-view",
  ".char-card",
  ".debate-card",
  ".debate__interjection",
  ".dispute-context__frame",
  ".court-gavel",
  ".photo-banner",
  ".debate-banner",
  ".hcm-portrait__frame",
]

const TILT_EXCLUDE = new Set([".char-card", ".debate-card"])
const MAX_TILT = 5
const HOVER_TRANSITION = "transform 0.12s ease-out"
const RESET_TRANSITION = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"

export default function GlassShine() {
  useEffect(() => {
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    const mqHover = window.matchMedia("(hover: hover)")

    const els = SELECTORS.flatMap((sel) => Array.from(document.querySelectorAll(sel)))
    const moveHandlers = new Map()

    els.forEach((el) => {
      if (el.dataset.glass) return
      el.dataset.glass = "1"
      el.classList.add("glass-frame")

      const shine = document.createElement("span")
      shine.className = "glass-shine"
      shine.setAttribute("aria-hidden", "true")
      el.appendChild(shine)

      if (mqReduce.matches || !mqHover.matches) return

      const tiltable = !Array.from(TILT_EXCLUDE).some((sel) => el.matches(sel))
      let raf = 0
      let resetTimer = 0

      const release = () => {
        if (!tiltable) return
        el.style.transition = RESET_TRANSITION
        el.style.transform = ""
        window.clearTimeout(resetTimer)
        resetTimer = window.setTimeout(() => {
          el.style.transition = ""
        }, 620)
      }

      const onMove = (e) => {
        const r = el.getBoundingClientRect()
        if (r.width === 0 || r.height === 0) return
        el.style.setProperty("--gx", `${e.clientX - r.left}px`)
        el.style.setProperty("--gy", `${e.clientY - r.top}px`)

        if (!tiltable) return
        cancelAnimationFrame(raf)
        raf = window.requestAnimationFrame(() => {
          const px = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1)
          const py = Math.min(Math.max((e.clientY - r.top) / r.height, 0), 1)
          const rx = (0.5 - py) * MAX_TILT
          const ry = (px - 0.5) * MAX_TILT
          el.style.transition = HOVER_TRANSITION
          el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-5px)`
        })
      }

      const onLeave = () => {
        cancelAnimationFrame(raf)
        release()
      }

      el.addEventListener("pointermove", onMove)
      el.addEventListener("pointerleave", onLeave)
      moveHandlers.set(el, { onMove, onLeave })
    })

    return () => {
      els.forEach((el) => {
        const handlers = moveHandlers.get(el)
        if (handlers) {
          el.removeEventListener("pointermove", handlers.onMove)
          el.removeEventListener("pointerleave", handlers.onLeave)
        }
        el.querySelectorAll(".glass-shine").forEach((s) => s.remove())
        el.style.transform = ""
        el.style.transition = ""
        delete el.dataset.glass
      })
    }
  }, [])

  return null
}
