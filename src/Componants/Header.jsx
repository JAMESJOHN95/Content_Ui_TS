import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/logo.png";
import "../App.css";
import { Modal, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  //dummy data
  const user = {
    name: "Akshit Jain",
    role: "Admin",
    image:
      "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
  };

  return (
    <>
      <Navbar
        style={{ backgroundColor: "#f2ebeb" }}
        fixed="top"
        expand="lg"
        className="mb-0"
      >
        <Container>
          <Row className="w-100">
            <Col xs={6} md={3}>
              <Navbar.Brand>
                <img
                  style={{ width: "40px", height: "30px" }}
                  src={logo}
                  alt="MartechBees Logo"
                />
                MartechBees
              </Navbar.Brand>
            </Col>
            <Col xs={6} md={9} className="text-end">
              <Navbar.Toggle aria-controls="navbar-nav" />
            </Col>
          </Row>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
                {" "}
                <Nav.Link href="#home" className="me-3 bold">
                  Settings
                </Nav.Link>
              </Link>
              <Nav.Link
                href="#features"
                style={{ cursor: "pointer" }}
                onClick={handleShow}
              >
                User
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* User Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={user.image}
            alt="User"
            className="rounded-circle mb-3 border border-2"
            style={{ width: "100px", height: "100px" }}
          />
          <h5>{user.name}</h5>
          <p className="text-muted">{user.role}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
