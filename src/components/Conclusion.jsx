import { conclusion } from "../data/script.js"
import Reveal from "./Reveal.jsx"
import { SpeakerChip } from "./shared.jsx"

export default function Conclusion() {
  return (
    <section id="conclusion" className="section conclusion">
      <div className="conclusion__bg" aria-hidden="true" />
      <span className="conclusion__roman" aria-hidden="true">
        IX
      </span>
      <div className="container container--narrow">
        <div className="conclusion__head">
          <SpeakerChip speaker="mc" compact />
          <span className="conclusion__label">Kết luận</span>
        </div>
        <Reveal>
          <div className="conclusion__setup">
            {conclusion.setup.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <blockquote className="pull-quote">
            <span className="pull-quote__mark" aria-hidden="true">“</span>
            {conclusion.pullQuote}
            <span className="pull-quote__mark" aria-hidden="true">”</span>
          </blockquote>
        </Reveal>
        <Reveal delay={180}>
          <p className="conclusion__thanks">{conclusion.thanks}</p>
        </Reveal>
      </div>
    </section>
  )
}
