import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import TieTheKnot from "./Image/logo_project_wedding.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import "../Style/Navbar.css";

const zillaSlabFontStyles = `
  /* Apply Zilla Slab font to Navbar text */
  .nav-text {
    font-family: 'Zilla Slab', serif;
  }
`;

// Add the Zilla Slab font styles to the head of the document
const styleTag = document.createElement('style');
styleTag.innerHTML = zillaSlabFontStyles;
document.head.appendChild(styleTag);

function MyDropdown() {
  const [auth, setAuth] = useState('');

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setAuth(storedAuth);
    }
  }, []);

  const handleAdminLogin = () => {
    setAuth('isAdmin');
    localStorage.setItem('auth', 'isAdmin');
  };

  const handleVendorLogin = () => {
    setAuth('isVendor');
    localStorage.setItem('auth', 'isVendor');
  };
  const handleLogout = () => {
    setAuth('Login');
    localStorage.setItem('auth', 'Login');
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
         {auth ? auth : 'Auth'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/adminJWT-login" onClick={handleAdminLogin}>Admin Login</Dropdown.Item>
        <Dropdown.Item href="/userJWT-login" onClick={handleVendorLogin}>Vendor Login</Dropdown.Item>
        <Dropdown.Item href="/#"onClick={handleLogout}>Logout</Dropdown.Item>


      </Dropdown.Menu>
    </Dropdown>
  );
}

function NavbarCode() {
  const customNavbarStyle = {
    backgroundColor: "#FED9ED",
  };

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <Navbar className="custom-navbar-bg" style={customNavbarStyle} expand="xxl">
        <Container>
          <Link to="/">
            <img src={TieTheKnot} alt="TieTheKnot Logo" height={30} />
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Navbar.Brand href="/">Tie The Knot</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/About">
                <Nav.Link className="nav-text">About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/WeddingVenues">
                <Nav.Link className="nav-text">Wedding Venues</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/WeddingVendors">
                <Nav.Link className="nav-text">Wedding Vendors</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/all-news">
                <Nav.Link className="nav-text">Gallery</Nav.Link>
              </LinkContainer>
            </Nav>
            {isAuthenticated && (
              <Nav>
                <Dropdown>
                  <Dropdown.Toggle className="nav-text" variant="none" id="dropdown-basic">
                    {user.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <LinkContainer to="/add">
                      <Dropdown.Item>User Form</Dropdown.Item>
                    </LinkContainer>
                    {/* <LinkContainer to="/Vendor">
                      <Dropdown.Item>Vendor Form</Dropdown.Item>
                    </LinkContainer> */}
                    <LinkContainer to="/paymentgateway">
                      <Dropdown.Item>Pay Now</Dropdown.Item>
                    </LinkContainer>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            )}
            {isAuthenticated ? (
              <Button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </Button>
            ) : (
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            )}
            &nbsp;
            <MyDropdown />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>

  );
            
            
}

export default NavbarCode;
