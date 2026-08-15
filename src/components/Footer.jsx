import { meta } from "../data/script.js"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <h2 className="footer__title">Phiên tòa giả định</h2>
            <p className="footer__subtitle">Gia đình truyền thống hay gia đình hạt nhân?</p>
            <p className="footer__meta">
              {meta.subject} · {meta.year}
            </p>
            <p className="footer__group">{meta.group}</p>
            <p className="footer__thanks">
              Chân thành cảm ơn thầy/cô và các bạn đã lắng nghe và đóng góp ý kiến.
            </p>
          </div>
          <div className="footer__sheet">
            <span className="footer__sheet-label">Biên bản phiên tòa</span>
            <span className="footer__sheet-ref">SỐ: {meta.caseNo}</span>
            <span className="footer__sheet-note">
              {meta.subject} · {meta.year}
            </span>
          </div>
        </div>
        <div className="footer__credits">
          <span>
            Chân dung Chủ tịch Hồ Chí Minh: Ảnh tư liệu Wikimedia Commons — Public Domain.
          </span>
          <span>
            Ảnh minh họa: Unsplash &amp; Pexels (ghi chú tại từng hình). Font: Lora · Be Vietnam
            Pro · IBM Plex Mono (Google Fonts).
          </span>
        </div>
      </div>
    </footer>
  )
}
