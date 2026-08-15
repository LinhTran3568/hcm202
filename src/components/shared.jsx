import { useEffect, useRef, useState, Fragment } from "react"
import Reveal from "./Reveal.jsx"
import {
  IconMic,
  IconScale,
  IconHouseTraditional,
  IconApartment,
  IconBook,
  IconQuote,
} from "./icons.jsx"

export const SPEAKERS = {
  mc: { name: "MC", icon: IconMic, tone: "mc", role: "Người dẫn dắt", tag: "Người dẫn dắt" },
  judge: { name: "Thẩm phán", icon: IconScale, tone: "judge", role: "Điều hành phiên tòa", tag: "Chủ tọa" },
  mother: {
    name: "Mẹ chồng",
    icon: IconHouseTraditional,
    tone: "mother",
    role: "Gia đình truyền thống",
    tag: "Bên bảo vệ gia đình truyền thống",
  },
  lan: {
    name: "Lan",
    icon: IconApartment,
    tone: "lan",
    role: "Gia đình hạt nhân",
    tag: "Bên đại diện gia đình hạt nhân",
  },
}

export function SpeakerAvatar({ speaker, size = "md" }) {
  const cfg = SPEAKERS[speaker] || SPEAKERS.mc
  const Icon = cfg.icon
  return (
    <span className={`speaker-avatar speaker-avatar--${cfg.tone} speaker-avatar--${size}`} aria-hidden="true">
      <Icon />
    </span>
  )
}

export function SpeakerChip({ speaker, compact = false }) {
  const cfg = SPEAKERS[speaker] || SPEAKERS.mc
  const Icon = cfg.icon
  return (
    <span className={`speaker-chip speaker-chip--${cfg.tone} ${compact ? "is-compact" : ""}`}>
      <span className="speaker-chip__icon">
        <Icon />
      </span>
      <span className="speaker-chip__name">{cfg.name}</span>
    </span>
  )
}

export function NoteCard({ note }) {
  const [open, setOpen] = useState(false)
  if (!note) return null
  return (
    <div className="note-card">
      <button
        type="button"
        className="note-card__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="note-card__badge">{note.quote ? "Trích" : "Phụ lục"}</span>
        <span className="note-card__toggle-label">{note.kind}</span>
        <span className={`note-card__chevron ${open ? "is-open" : ""}`} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>
      <div className={`note-card__body ${open ? "is-open" : ""}`}>
        {note.quote && <p className="note-card__quote">{note.quote}</p>}
        {note.source && <p className="note-card__source">{note.source}</p>}
        {note.items && (
          <ul className="note-card__list">
            {note.items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        )}
        {note.extra && <p className="note-card__extra">{note.extra}</p>}
      </div>
    </div>
  )
}

export function SectionHead({ roman, eyebrow, title, lead, center = false, tone = "" }) {
  const titleRef = useRef(null)
  const words = title.split(" ")

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible")
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px 15% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`section-head ${center ? "section-head--center" : ""}`}>
      <div className="section-head__row">
        {roman && <span className="section-head__roman" aria-hidden="true">{roman}</span>}
        <div className="section-head__main">
          {eyebrow && <p className={`eyebrow ${center ? "eyebrow--center" : ""}`}>{eyebrow}</p>}
          <h2
            ref={titleRef}
            className={`section-title ${center ? "section-title--center" : ""} ${tone ? `section-title--${tone}` : ""}`}
          >
            {words.map((w, i) => (
              <Fragment key={i}>
                <span className="title-word" style={{ "--word-i": i }}>
                  {w}
                </span>
                {i < words.length - 1 ? " " : null}
              </Fragment>
            ))}
          </h2>
        </div>
      </div>
      {lead && <p className={`section-lead ${center ? "section-lead--center" : ""}`}>{lead}</p>}
    </div>
  )
}

export function OrnamentDivider() {
  return (
    <div className="divider-ornament" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5.5c-2.6 2.3-3.4 5-2.6 7.4-3.7.3-6.4 3.4-7.9 5.9 3.4.2 6.3-.5 8.4-2.4.4.7.9 1.3 1.5 1.8M12 5.5c2.6 2.3 3.4 5 2.6 7.4 3.7.3 6.4 3.4 7.9 5.9-3.4.2-6.3-.5-8.4-2.4-.4.7-.9 1.3-1.5 1.8" />
      </svg>
    </div>
  )
}

export function useTilt(max = 4) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      el.style.setProperty("--rx", `${(-py * max).toFixed(2)}deg`)
      el.style.setProperty("--ry", `${(px * max).toFixed(2)}deg`)
    }
    const onLeave = () => {
      el.style.setProperty("--rx", "0deg")
      el.style.setProperty("--ry", "0deg")
    }
    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [max])
  return ref
}

export { Reveal }
