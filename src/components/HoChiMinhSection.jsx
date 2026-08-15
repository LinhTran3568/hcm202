import { hcmIntro } from "../data/script.js"
import Reveal from "./Reveal.jsx"
import { SectionHead, NoteCard, SpeakerChip } from "./shared.jsx"
import bacHo from "../assets/bac-ho-1946.jpg"

export default function HoChiMinhSection() {
  return (
    <section id="hcm" className="section section--paper section--bg-hcm">
      <div className="container">
        <SectionHead
          roman="VI"
          eyebrow="Liên hệ tư tưởng"
          title="Liên hệ với Tư tưởng Hồ Chí Minh"
          lead="Vấn đề sống chung hay sống riêng, xét sâu xa, là câu hỏi về con người: tự do xây dựng cuộc sống của mình trong khi vẫn duy trì trách nhiệm với những người xung quanh."
        />

        <Reveal>
          <div className="hcm-frame">
            <figure className="hcm-portrait">
              <div className="hcm-portrait__frame">
                <img
                  src={bacHo}
                  alt="Chân dung Chủ tịch Hồ Chí Minh năm 1946"
                  loading="lazy"
                />
              </div>
              <figcaption>
                Chân dung Chủ tịch Hồ Chí Minh (1946)
                <span>Ảnh tư liệu — Wikimedia Commons, Public Domain</span>
              </figcaption>
            </figure>
            <div className="hcm-frame__content">
              <p className="eyebrow">Tư tưởng Hồ Chí Minh về con người</p>
              <h3 className="hcm-frame__title">
                Con người không tồn tại biệt lập, mà luôn gắn với các mối quan hệ xã hội
              </h3>
              <p className="hcm-frame__text">
                Trong giáo trình, con người không được nhìn nhận như một cá thể tồn tại biệt lập
                mà luôn tồn tại trong các mối quan hệ xã hội. Vì vậy, Lan có quyền tự lập và xây
                dựng gia đình riêng, nhưng việc sống riêng không làm Lan mất đi mối quan hệ và
                trách nhiệm với cha mẹ.
              </p>
              <blockquote className="hcm-frame__quote">
                “Xa lạ với con người trừu tượng, phi nguồn gốc lịch sử, Hồ Chí Minh nhìn nhận con
                người lịch sử - cụ thể về giới tính, lứa tuổi, nghề nghiệp, chức vụ, vị trí...,
                trong từng giai đoạn lịch sử cụ thể.”
                <footer>Chương VI, mục III.1, trang 132</footer>
              </blockquote>
            </div>
          </div>
        </Reveal>

        <div className="hcm-blocks">
          {hcmIntro.map((block, i) => (
            <Reveal key={block.id} delay={(i % 2) * 80}>
              <article className="hcm-block">
                <div className="hcm-block__head">
                  <SpeakerChip speaker="mc" compact />
                  <span className="hcm-block__label">{block.label}</span>
                </div>
                <div className="hcm-block__text">
                  {block.text.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                {block.checklist && (
                  <ul className="hcm-block__checklist">
                    {block.checklist.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
                <NoteCard note={block.note} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
