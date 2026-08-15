import { Fragment, useEffect, useState } from "react"
import { debate } from "../data/script.js"
import Reveal from "./Reveal.jsx"
import { SectionHead, SpeakerChip, SpeakerAvatar, NoteCard, useTilt } from "./shared.jsx"
import giaDinhViet from "../assets/gia-dinh-viet.jpg"
import voChongTre from "../assets/vo-chong-tre.jpg"
import giaDinhAn from "../assets/gia-dinh-an.jpg"
import ongBaGoi from "../assets/ong-ba-goi.jpg"

function useActiveDebate() {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-debate-id]"))
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("data-debate-id"))
          }
        })
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return active
}

function DebateCard({ line }) {
  const tiltRef = useTilt(3.5)
  return (
    <article ref={tiltRef} className={`debate-card debate-card--${line.speaker}`}>
      <div className="debate-card__head">
        <SpeakerChip speaker={line.speaker} compact />
      </div>
      {line.title && <h3 className="debate-card__title">{line.title}</h3>}
      <div className="debate-card__text">
        {line.text.map((p, j) => (
          <p key={j}>{p}</p>
        ))}
      </div>
      <NoteCard note={line.note} />
    </article>
  )
}

function BreakBanner({ src, alt, label, caption, last = false }) {
  return (
    <Reveal delay={40} className="debate-break">
      <figure className={`debate-banner ${last ? "debate-banner--last" : ""}`}>
        <img src={src} alt={alt} loading="lazy" />
        <figcaption>
          <span className="debate-banner__label">{label}</span>
          <span>{caption}</span>
        </figcaption>
      </figure>
    </Reveal>
  )
}

export default function Debate() {
  const active = useActiveDebate()
  return (
    <section id="debate" className="section section--bg-debate">
      <div className="container">
        <SectionHead
          roman="IV"
          eyebrow="Tranh luận chính"
          title="Phần tranh luận chính"
          lead="Hai phía đối lập lần lượt trình bày và phản biện: Mẹ chồng bảo vệ sự gắn kết các thế hệ, Lan bảo vệ quyền tự lập và cách sống phù hợp với điều kiện mới."
        />

        <Reveal>
          <div className="dispute-context">
            <figure className="dispute-context__item">
              <div className="dispute-context__frame">
                <img
                  src={giaDinhViet}
                  alt="Gia đình Việt Nam nhiều thế hệ sum vầy"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span className="dispute-context__title">Gia đình truyền thống</span>
                <span className="dispute-context__sub">Nhiều thế hệ chung sống, nương tựa</span>
              </figcaption>
            </figure>
            <figure className="dispute-context__item">
              <div className="dispute-context__frame">
                <img
                  src={voChongTre}
                  alt="Cặp vợ chồng trẻ người Việt bên nhau"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span className="dispute-context__title">Gia đình hạt nhân</span>
                <span className="dispute-context__sub">Tổ ấm riêng, tự lập và không gian riêng</span>
              </figcaption>
            </figure>
          </div>
        </Reveal>

        <div className="debate">
          {debate.map((line, i) => {
            const turn = String(i + 1).padStart(2, "0")
            if (line.speaker === "judge" && line.text.length === 1) {
              return (
                <Fragment key={line.id}>
                  <Reveal className="debate__center-row" delay={40}>
                    <div className="debate__interjection">
                      <span className="debate-card__turn debate-card__turn--interj">
                        LƯỢT {turn}
                      </span>
                      <SpeakerAvatar speaker="judge" size="sm" />
                      <p>{line.text[0]}</p>
                    </div>
                  </Reveal>
                </Fragment>
              )
            }
            const side = line.speaker === "mother" ? "left" : "right"
            return (
              <Fragment key={line.id}>
                <Reveal
                  data-debate-id={line.id}
                  className={`debate__col debate__col--${side}`}
                  delay={40}
                >
                  <div className={`debate-card-stack ${active === line.id ? "is-active" : ""}`}>
                    <span className="debate-card__turn" aria-hidden="true">
                      LƯỢT {turn}
                    </span>
                    <DebateCard line={line} />
                  </div>
                </Reveal>
                {i === 3 && (
                  <BreakBanner
                    src={giaDinhAn}
                    alt="Gia đình nhiều thế hệ quây quần bên bữa cơm"
                    label="Hình ảnh đối chiếu"
                    caption="Bữa cơm sum vầy — giá trị hai bên cùng hướng tới, dù hình thức sống chung hay riêng."
                  />
                )}
                {i === 6 && (
                  <BreakBanner
                    last
                    src={ongBaGoi}
                    alt="Bà cháu người Việt quây quần bên nhau ngoài trời"
                    label="Hình ảnh đối chiếu"
                    caption="Kết nối giữa các thế hệ bằng công nghệ — minh họa cho giải pháp “sống riêng nhưng vẫn gắn kết”."
                  />
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
