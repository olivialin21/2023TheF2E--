import { Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import imgCat from "../images/img-cat.png";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section className="footer">
      <Container>
        <div className="footer-area">
          <img className="footer-cat" src={imgCat} alt="cat" />
          <div className="footer-content">
            <div className="footer-content-logo">
              <HashLink to="#" className="footer-logo" />
            </div>
            <div className="footer-content-nav">
              <h4 className="footer-content-title">Menu</h4>
              <ul className="footer-content-nav-list">
                <li>
                  <HashLink to="#" className="footer-content-nav-item">首頁</HashLink>
                </li>
                <li>
                  <HashLink to="#candidate" className="footer-content-nav-item">候選人主張</HashLink>
                </li>
                <li>
                  <HashLink to="#activity" className="footer-content-nav-item">最新活動</HashLink>
                </li>
                <li>
                  <HashLink to="#policy" className="footer-content-nav-item">政策議題</HashLink>
                </li>
                <li>
                  <HashLink to="#email" className="footer-content-nav-item">民眾服務信箱</HashLink>
                </li>
                <li>
                  <HashLink to="#donation" className="footer-content-nav-item">小額捐款</HashLink>
                </li>
              </ul>
            </div>
            <div className="footer-content-info">
              <h4 className="footer-content-title">Office information</h4>
              <ul className="footer-content-info-list">
                <li>地址：台北市喵星區毛茸茸大道88號喵喵大樓3樓</li>
                <li>電話：<Link to="tel:(02)888-5678">(02) 888-5678</Link></li>
                <li>郵件：<Link to="mailto:meowoffice@linmeow.tw">meowoffice@linmeow.tw</Link></li>
              </ul>
            </div>
          </div>
          <p className="footer-copyright">版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。</p>
        </div>
      </Container>
    </section>
  )
}