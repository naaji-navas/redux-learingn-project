import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar className="fixed" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand to="/" as={Link}>
          Redux TUTU
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-end" id="navbarScroll">
          <Navbar.Text>
            <Nav.Link as={Link} to="/cart">
              My Bag {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
