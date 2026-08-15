import { useEffect, useState } from "react"

const SECTIONS = [
  { id: "hero", label: "Mở đầu" },
  { id: "characters", label: "Nhân vật" },
  { id: "opening", label: "Khai mạc phiên tòa" },
  { id: "debate", label: "Phần tranh luận" },
  { id: "judge", label: "Thẩm phán tổng kết" },
  { id: "hcm", label: "Tư tưởng Hồ Chí Minh" },
  { id: "poll", label: "Tương tác với lớp" },
  { id: "solutions", label: "Quan điểm của nhóm" },
  { id: "conclusion", label: "Kết luận" },
]

export default function ScrollChrome() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState("hero")

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight
        setProgress(total > 0 ? window.scrollY / total : 0)
        ticking = false
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress__bar" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <nav className="nav-dots" aria-label="Di chuyển giữa các phần">
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`nav-dots__dot ${active === id ? "is-active" : ""}`}
            onClick={() => goTo(id)}
            aria-label={label}
            title={label}
          >
            <span className="nav-dots__label">{label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
