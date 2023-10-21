import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">TIENDA ON LINE</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink className={({ isActive }) => isActive ? "link-active" :"" } to="/">Home</NavLink>
              <NavLink className={({ isActive }) => isActive ? "link-active" :"" } to="/about">About</NavLink>
              <NavLink className={({ isActive }) => isActive ? "link-active" :"" }to="/contacto">Contacto</NavLink>
              <NavLink className={({ isActive }) => isActive ? "link-active" :"" }to="/category/hombre">Hombre</NavLink>
              <NavLink className={({ isActive }) => isActive ? "link-active" :"" }to="/category/mujer">Mujer</NavLink>
            </Nav>
          </Container>
        </Navbar>
  );
}

export default NavBar;