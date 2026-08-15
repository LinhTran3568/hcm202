import { meta } from "../data/script.js"
import { IconArrowDown, IconGavel } from "./icons.jsx"

export default function Hero({ heroRef }) {
  const goToCharacters = () => {
    document.getElementById("characters")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header ref={heroRef} id="hero" className="hero">
      <div className="hero__texture" aria-hidden="true" />
      <span className="hero__roman" aria-hidden="true">
        I
      </span>
      <div className="container hero__inner">
        <p className="hero__eyebrow">{meta.subject}</p>
        <p className="hero__ref">
          <span className="hero__ref-label">Số hồ sơ</span>
          <span className="hero__ref-value">SỐ: {meta.caseNo}</span>
        </p>
        <h1 className="hero__title">
          <span className="hero__title-kicker">{meta.title}</span>
          {meta.subtitle}
        </h1>
        <p className="hero__tagline">{meta.tagline}</p>
        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={goToCharacters}>
            <IconGavel />
            Bắt đầu phiên tòa
          </button>
          <a className="btn btn--ghost" href="#judge">
            Xem tổng kết của Thẩm phán
          </a>
        </div>
        <div className="hero__meta">
          <span>{meta.year}</span>
          <span aria-hidden="true" className="hero__dot">
            ·
          </span>
          <span>Thuyết trình học thuật</span>
        </div>
      </div>
      <button
        type="button"
        className="hero__scroll-hint"
        onClick={goToCharacters}
        aria-label="Cuộn xuống xem nhân vật"
      >
        <IconArrowDown />
      </button>
    </header>
  )
}
