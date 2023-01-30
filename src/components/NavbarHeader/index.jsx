import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import logo from "./snek_logo.jpg";

export default function NavbarHeader() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbarHeader">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="150"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {/* SnekBomb */}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
