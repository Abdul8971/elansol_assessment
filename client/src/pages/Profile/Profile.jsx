import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userObject = JSON.parse(storedUser);
      setUser(userObject);
      console.log(userObject);
    }
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: "300px" }} className="text-center p-4">
        <div
          className="mx-auto rounded-circle bg-primary d-flex align-items-center justify-content-center"
          style={{
            width: "80px",
            height: "80px",
            fontSize: "2rem",
            color: "white",
          }}
        >
          {user.username && user.username.charAt(0).toUpperCase()}
        </div>

        <Card.Body>
          <Card.Title className="mt-3">{user.username}</Card.Title>
          <Card.Text>Email: {user.email}</Card.Text>
          <Card.Text>Date of Birth: {user.dob}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;
