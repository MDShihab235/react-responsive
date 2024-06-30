import "./Navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.png";
import { Form, InputGroup } from "react-bootstrap";
import search from "../../assets/search.png";
import hobby from "../../assets/Hobbies.png";
import explore from "../../assets/Explore.png";
import note from "../../assets/bookmark.png";
import bell from "../../assets/notifications.png";
import bag from "../../assets/Product.png";

const NavigationBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={logo}
            width="294"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form inline className="search-container">
          <InputGroup>
            <Form.Control
              placeholder="Search here..."
              aria-label="search"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1" className="search-btn">
              <img alt="logo" src={search} width="20" height="20" />
            </InputGroup.Text>
          </InputGroup>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto nav-link-container">
            <div className="drop-down-style">
              <img src={explore} alt="hobby" width="24" height="24" />
              <NavDropdown title="Explore" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  People - Community
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Places - Venues
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Programs - Events
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Products - Store
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Blogs</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="drop-down-style">
              <img src={hobby} alt="hobby" width="24" height="24" />
              <NavDropdown title="Hobbies" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  People - Community
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Places - Venues
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Programs - Events
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Products - Store
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Blogs</NavDropdown.Item>
              </NavDropdown>
            </div>
            <Nav.Link href="#note">
              <img src={note} alt="notes" width={24} height={24} />
            </Nav.Link>
            <Nav.Link href="#bell">
              <img src={bell} alt="bell" width={24} height={24} />
            </Nav.Link>
            <Nav.Link href="#bag">
              <img src={bag} alt="bag" width={24} height={24} />
            </Nav.Link>
            <button id="sign-in-btn">Sign In</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
