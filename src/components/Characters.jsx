import { characters } from "../data/script.js"
import Reveal from "./Reveal.jsx"
import { SectionHead, SPEAKERS, useTilt } from "./shared.jsx"
import nhaTruyenThong from "../assets/nha-truyen-thong.jpg"
import canHo from "../assets/can-ho-cozy.jpg"

const CARD_PHOTO = {
  mother: {
    src: nhaTruyenThong,
    alt: "Ngôi nhà truyền thống bằng gỗ của người Việt",
    caption: "Nhà truyền thống",
  },
  lan: {
    src: canHo,
    alt: "Căn hộ nhỏ gọn, ấm cúng của một gia đình trẻ",
    caption: "Tổ ấm hạt nhân",
  },
}

function CharacterCard({ c, cfg, photo, index }) {
  const tiltRef = useTilt(4)
  const Icon = cfg.icon
  return (
    <Reveal delay={index * 90} className="char-cell">
      <article ref={tiltRef} className={`char-card char-card--${cfg.tone}`}>
        <span className="char-card__tag">{cfg.tag}</span>
        <div className="char-card__icon" aria-hidden="true">
          <Icon />
        </div>
        <h3 className="char-card__name">{c.name}</h3>
        <p className="char-card__role">{c.role}</p>
        <p className="char-card__desc">{c.desc}</p>
        {photo && (
          <figure className="char-card__photo">
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        )}
      </article>
    </Reveal>
  )
}

export default function Characters() {
  return (
    <section id="characters" className="section section--bg-characters">
      <div className="container">
        <SectionHead
          roman="II"
          eyebrow="Hồ sơ nhân sự"
          title="Các nhân vật tham gia phiên tòa"
          lead="Bốn nhân vật đại diện cho những góc nhìn khác nhau về gia đình Việt Nam trước sự chuyển đổi mô hình."
        />
        <div className="char-grid">
          {characters.map((c, i) => {
            const cfg = SPEAKERS[c.id] || SPEAKERS.mc
            return <CharacterCard key={c.id} c={c} cfg={cfg} photo={CARD_PHOTO[c.id]} index={i} />
          })}
        </div>
      </div>
    </section>
  )
}
