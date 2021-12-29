import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AmNav =()=>{
    return(

    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link to="/">Home</Link> </Nav.Link>
      <Nav.Link><Link to="/about">About Us</Link> </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    )

}