import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Logout() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/indexPage");
  };

  const handleCancel = () => {
    navigate("/");
  };

  function handleClick() {
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 500);
  }
  return (
    <Container
      className={`d-flex justify-content-center align-items-center min-vh-100 min-vw-100 ${
        click && "bg-light "
      } `}
      style={{
        backgroundColor: "rgba(220, 211, 211,0.3)",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      onClick={handleClick}
    >
      <Card className="text-center p-4 " style={{ width: "300px" }}>
        <Card.Body>
          <Card.Title>Logout</Card.Title>
          <Card.Text>Do you want to logout?</Card.Text>
          <div className="d-flex justify-content-around mt-3">
            <Button variant="danger" onClick={handleLogout}>
              Yes
            </Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Logout;
