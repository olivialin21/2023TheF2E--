import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home" className="header-logo">喵立翰立委競選官網</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto header-nav">
            <Link href="#" className="header-nav-item">候選人主張</Link>
            <Link href="#" className="header-nav-item">最新活動</Link>
            <Link href="#" className="header-nav-item">政策議題</Link>
            <Link href="#" className="header-nav-item">民眾服務信箱</Link>
            <Link href="#" className="header-nav-item-purple">小額捐款</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <header className="header">
    //   <Container>
    //     <div className="header-container">
    //       <h1 className="header-logo"><Link href="/">喵立翰立委競選官網</Link></h1>
    //       <nav className="header-nav">
    //         <ul>
    //           <li>
    //             <Link
    //               to="/"
    //               className="header-nav-item"
    //             > 
    //               候選人主張
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/"
    //               className="header-nav-item"
    //             >
    //               候選人主張
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/"
    //               className="header-nav-item"
    //             >
    //               候選人主張
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/"
    //               className="header-nav-item"
    //             >
    //               候選人主張
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/"
    //               className="header-nav-item"
    //             >
    //               候選人主張
    //             </Link>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //   </Container>
    // </header>
  )
}