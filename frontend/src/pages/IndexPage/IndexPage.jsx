import React, { useState } from "react";
import { Container, Nav, Navbar, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center min-vh-90 "
    >
      <Navbar style={{ width: "100%" }}>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          ELANSOL <span className="brand-subtitle">technology</span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button as={Link} to="/login">
            Login
          </Button>
        </Nav>
      </Navbar>
      <Row
        className="text-center"
        style={{ maxWidth: "700px", marginTop: "100px" }}
      >
        <Col>
          <h1>Welcome to ELANSOL Technology Private Limited</h1>
        </Col>
      </Row>
      <Button
        as={Link}
        to="/login"
        style={{
          marginTop: "70px",
          width: "200px",
          display: "block",
        }}
      >
        Login
      </Button>
    </Container>
  );
}

export default IndexPage;
