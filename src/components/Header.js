import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import IconCoin from "../images/icon-coin.svg";
import IconMenu from "../images/icon-menu.svg";
import IconClose from "../images/icon-close.svg";

export default function Header() {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <>
      <Navbar expand="lg" className="header">
        <Container>
          <h1><Navbar.Brand href="#" className="header-logo">喵立翰立委競選官網</Navbar.Brand></h1>
          <button className="header-toggle">
            <img src={IconMenu} alt="mobile-menu" onClick={toggleMenu}/>
          </button>
          <Navbar.Collapse id="basic-navbar-nav" className="header-collapse">
            <Nav className="ms-auto header-nav">
              <HashLink to="#candidate" className="header-nav-item">候選人主張</HashLink>
              <HashLink to="#activity" className="header-nav-item">最新活動</HashLink>
              <HashLink to="#policy" className="header-nav-item">政策議題</HashLink>
              <HashLink to="#email" className="header-nav-item">民眾服務信箱</HashLink>
              <HashLink to="#donation" className="header-nav-item-purple">
                <img src={IconCoin} alt="icon-coin" />
                <p>小額捐款</p>
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={`header-mobile-nav ${show ? "show" : ""}`}>
        <Container>
          <div className="header-mobile-navTop">
            <HashLink to="#" className="header-mobile-logo" />
            <button className="header-mobile-close" onClick={toggleMenu}>
              <img src={IconClose} alt="icon-close" />
            </button>
          </div>
          <ul>
            <li>
              <HashLink to="#candidate" className="header-mobile-nav-item">候選人主張</HashLink>
            </li>
            <li>
              <HashLink to="#activity" className="header-mobile-nav-item">最新活動</HashLink>
            </li>
            <li>
              <HashLink to="#policy" className="header-mobile-nav-item">政策議題</HashLink>
            </li>
            <li>
              <HashLink to="#email" className="header-mobile-nav-item">民眾服務信箱</HashLink>
            </li>
            <li>
              <HashLink to="#donation" className="header-mobile-nav-item-white">
                <img src={IconCoin} alt="icon-coin" />
                <p>小額捐款</p>
              </HashLink>
            </li>
          </ul>
        </Container>
      </div >
    </>
  )
}