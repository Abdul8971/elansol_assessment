import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { Container } from "react-bootstrap";

function Layout() {
  return (
    <div>
      <NavBar />
      <Container className="mt-4">
        <Outlet />
      </Container>
    </div>
  );
}

export default Layout;
