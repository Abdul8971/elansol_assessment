import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="navbar"
      expanded={expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          ELANSOL <span className="brand-subtitle">technology</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link active`}
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/profile"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Profile
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/logout"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
