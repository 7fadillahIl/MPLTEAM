import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">MPL</Navbar.Brand>
          <Nav>
            <Nav.Link href="#mpl_id">MPL-ID</Nav.Link>
            <Nav.Link href="#mplph">MPL-PH</Nav.Link>
            <Nav.Link href="#mplmy">MPL-MY</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
