import { solutions } from "../data/script.js"
import Reveal from "./Reveal.jsx"
import { SectionHead, SpeakerChip } from "./shared.jsx"
import { IconSprout, IconLinked, IconArrows, IconGenerations } from "./icons.jsx"

const SOLUTION_ICONS = {
  giatri: IconSprout,
  tulap: IconLinked,
  "ton-trong": IconArrows,
  "gan-ket": IconGenerations,
}

export default function SolutionsSection() {
  return (
    <section id="solutions" className="section section--bg-solutions">
      <div className="container">
        <SectionHead
          roman="VIII"
          eyebrow="Quan điểm nhóm"
          title="Quan điểm và giải pháp của nhóm"
          lead="Nhóm lựa chọn mô hình gia đình hạt nhân, nhưng vẫn duy trì sự gắn kết với gia đình mở rộng."
        />

        <Reveal>
          <div className="group-view">
            <div className="group-view__head">
              <SpeakerChip speaker="mc" compact />
              <span>Nhận định của nhóm</span>
            </div>
            <p>{solutions.view}</p>
            <p>{solutions.viewExtra}</p>
          </div>
        </Reveal>

        <div className="solutions-grid">
          {solutions.items.map((item, i) => {
            const Icon = SOLUTION_ICONS[item.id] || IconSprout
            return (
              <Reveal key={item.id} delay={(i % 2) * 90} className="solutions-grid__cell">
                <article className="solution-card">
                  <div className="solution-card__icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3 className="solution-card__title">{item.title}</h3>
                  <div className="solution-card__text">
                    {item.text.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
