import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <h1><Navbar.Brand href="#" className="header-logo">喵立翰立委競選官網</Navbar.Brand></h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto header-nav">
            <HashLink to="#candidate" className="header-nav-item">候選人主張</HashLink>
            <HashLink to="#activity" className="header-nav-item">最新活動</HashLink>
            <HashLink to="#policy" className="header-nav-item">政策議題</HashLink>
            <HashLink to="#email" className="header-nav-item">民眾服務信箱</HashLink>
            <HashLink to="#donation" className="header-nav-item-purple">小額捐款</HashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}