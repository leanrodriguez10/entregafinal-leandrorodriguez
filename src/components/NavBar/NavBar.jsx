import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';



const NavBar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">TIENDA ON LINE</Navbar.Brand>
            <Nav className="me-auto" >
              <NavLink className={({ isActive }) => isActive ? "link-active navlink" :"navlink" } to="/">Home</NavLink>
              <NavLink className={({ isActive }) => isActive ? "link-active navlink" :"navlink" } to="/celulares">Celulares</NavLink>
              <NavLink className={({ isActive }) => isActive ? "link-active navlink" :"navlink" } to="/tablet">Tablet</NavLink>
              <NavLink className={({ isActive }) => isActive ? "link-active navlink" :"navlink" } to="/smartv">Smartv</NavLink>
              <NavLink className={({ isActive }) => isActive ? "link-active navlink" :"navlink" } to="/cart">Cart</NavLink>
            </Nav>
          </Container>
          <CartWidget />
        </Navbar>
  );
}

export default NavBar;