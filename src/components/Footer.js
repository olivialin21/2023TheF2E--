import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import imgCat from "../images/img-cat.png";

export default function Footer() {
  return (
    <section className="footer">
      <Container>
        <div className="footer-content">
          <img className="footer-cat" src={imgCat} alt="cat" />
          <div className="row align-items-center">
            <div className="col-5">
              <HashLink to="#" className="footer-logo" />
            </div>
            <div className="col-3">
              <h4>Menu</h4>
              <ul>
                <li>
                  <HashLink to="#" className="header-nav-item">候選人主張</HashLink>
                </li>
                <li>
                  <HashLink to="#" className="header-nav-item">候選人主張</HashLink>
                </li>
                <li>
                  <HashLink to="#" className="header-nav-item">候選人主張</HashLink>
                </li>
                <li>
                  <HashLink to="#" className="header-nav-item">候選人主張</HashLink>
                </li>
                <li>
                  <HashLink to="#" className="header-nav-item">候選人主張</HashLink>
                </li>
                <li>
                  <HashLink to="#" className="header-nav-item">候選人主張</HashLink>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h4>Office information</h4>
              <ul className="">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}