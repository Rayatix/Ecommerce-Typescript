import { NavLink } from "react-router-dom";
import { HeaderBasket } from "../../ecommerce";
import { Badge, Navbar, Container, Nav } from "react-bootstrap";
import styles from "./styles.module.css";

const { headerContainer, headerLogo } = styles;

const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Our</span>
          <Badge bg="info">Ecommerce</Badge>
        </h1>

        {/* Basket */}
        <HeaderBasket />
      </div>

      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#link">Categories</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="#home">Login</Nav.Link>
              <Nav.Link href="#link">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
