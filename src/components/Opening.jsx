import { opening, caseStatement } from "../data/script.js"
import Reveal from "./Reveal.jsx"
import { SectionHead, SpeakerChip } from "./shared.jsx"
import { IconGavel } from "./icons.jsx"
import gavel from "../assets/gavel.jpg"

function SpeechParagraphs({ text, className = "" }) {
  return (
    <div className={`speech-text ${className}`}>
      {text.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

export default function Opening() {
  return (
    <section id="opening" className="section section--alt section--bg-opening">
      <div className="container">
        <SectionHead
          roman="III"
          eyebrow="Khai mạc"
          title="Khai mạc phiên tòa"
          lead="MC nêu bối cảnh và đặt ra câu hỏi trọng tâm, sau đó Thẩm phán công bố vụ việc."
        />

        <Reveal>
          <div className="speech-card speech-card--mc">
            <div className="speech-card__head">
              <SpeakerChip speaker={opening.speaker} />
              <span className="speech-card__tag">Lời mở đầu</span>
            </div>
            <SpeechParagraphs text={opening.text} />
          </div>
        </Reveal>

        <div className="court-wrap">
          <Reveal>
            <div className="court-record">
              <div className="court-record__inner">
                <div className="court-record__topbar">
                  <span className="court-record__emblem" aria-hidden="true">
                    <IconGavel />
                  </span>
                  <div className="court-record__org">
                    <span className="court-record__org-name">Tòa Gia đình giả định</span>
                    <span className="court-record__org-sub">Hội đồng xét xử · Phiên thứ nhất</span>
                  </div>
                  <span className="court-record__ref">{caseStatement.ref}</span>
                </div>
                <h3 className="court-record__title">{caseStatement.label}</h3>
                <SpeechParagraphs text={caseStatement.text} />
                <div className="court-record__sign">
                  <SpeakerChip speaker={caseStatement.speaker} compact />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="court-gavel">
              <img
                src={gavel}
                alt="Chiếc búa thẩm phán bằng gỗ đặt trên mặt bàn"
                loading="lazy"
              />
              <figcaption>Biểu trưng phiên xử — Tingey Injury Law Firm, Unsplash</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
