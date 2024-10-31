import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-90 "
    >
      <Row>
        <Col
          className="text-center "
          style={{ maxWidth: "700px", marginTop: "100px" }}
        >
          <h1>Welcome to ELANSOL Technology Private Limited</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
