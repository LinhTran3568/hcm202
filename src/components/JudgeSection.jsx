import { judgeSummary } from "../data/script.js"
import Reveal from "./Reveal.jsx"
import { SectionHead, SpeakerChip } from "./shared.jsx"
import phongXuAn from "../assets/phong-xu-an.jpg"

export default function JudgeSection() {
  return (
    <section id="judge" className="section section--alt section--bg-judge">
      <div className="container">
        <SectionHead
          roman="V"
          eyebrow="Tổng kết phiên tòa"
          title="Thẩm phán tổng kết và phân tích lý luận"
          lead="Ba vấn đề được xem xét trên tinh thần khách quan: mâu thuẫn thực sự của hai bên, bản chất của sự chuyển đổi mô hình, và vai trò của gia đình trong điều kiện mới."
        />

        <div className="verdict-list">
          {judgeSummary.map((block, i) => (
            <Reveal key={block.id} delay={i * 80}>
              <article className="verdict-card">
                <div className="verdict-card__num" aria-hidden="true">
                  {block.num}
                </div>
                <div className="verdict-card__body">
                  <h3 className="verdict-card__title">{block.title}</h3>
                  <div className="verdict-card__text">
                    {block.text.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                  {block.note && <p className="verdict-card__note">{block.note}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <figure className="photo-banner">
            <img
              src={phongXuAn}
              alt="Chiếc búa thẩm phán bằng gỗ đặt trên khối gỗ"
              loading="lazy"
            />
            <figcaption>Ảnh minh họa công lý — Búa thẩm phán (Pexels)</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={60}>
          <div className="verdict-closing">
            <SpeakerChip speaker="judge" compact />
            <p>Phiên tòa xin kết thúc tại đây. Phần tiếp theo, xin nhường lại cho MC để liên hệ với tư tưởng Hồ Chí Minh và quan điểm của nhóm.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
