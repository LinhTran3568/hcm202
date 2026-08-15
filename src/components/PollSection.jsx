import { useState } from "react"
import { poll } from "../data/script.js"
import Reveal from "./Reveal.jsx"
import { SectionHead, SpeakerChip } from "./shared.jsx"
import { IconCheck, IconX } from "./icons.jsx"

function PollCard({ q, index }) {
  const [picked, setPicked] = useState(null)
  return (
    <div className="poll-card">
      <span className="poll-card__num">Mệnh đề {String(index + 1).padStart(2, "0")}</span>
      <div className="poll-card__body">
        <p className="poll-card__statement">{q.statement}</p>
        <div className="poll-card__actions">
          <button
            type="button"
            className={`poll-btn poll-btn--agree ${picked === "agree" ? "is-picked" : ""}`}
            onClick={() => setPicked("agree")}
            aria-pressed={picked === "agree"}
          >
            <span className="poll-btn__icon">
              <IconCheck />
            </span>
            Đồng tình
          </button>
          <button
            type="button"
            className={`poll-btn poll-btn--disagree ${picked === "disagree" ? "is-picked" : ""}`}
            onClick={() => setPicked("disagree")}
            aria-pressed={picked === "disagree"}
          >
            <span className="poll-btn__icon">
              <IconX />
            </span>
            Không đồng tình
          </button>
        </div>
        <p className={`poll-card__ask ${picked ? "is-visible" : ""}`}>{poll.ask}</p>
      </div>
    </div>
  )
}

export default function PollSection() {
  return (
    <section id="poll" className="section section--alt section--bg-poll">
      <div className="container container--narrow">
        <SectionHead
          roman="VII"
          eyebrow="Tương tác với lớp"
          title="Tương tác với lớp"
          lead="Nhóm mời cả lớp cho ý kiến về ba mệnh đề dưới đây — mỗi người hãy lựa chọn và giải thích quan điểm của mình."
          center
        />

        <Reveal>
          <div className="poll-intro">
            <SpeakerChip speaker="mc" compact />
            <p>{poll.intro}</p>
          </div>
        </Reveal>

        <div className="poll-list">
          {poll.questions.map((q, i) => (
            <Reveal key={i} delay={i * 90}>
              <PollCard q={q} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="poll-note">{poll.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
