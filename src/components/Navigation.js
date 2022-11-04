import React, { useState } from "react";
import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";
import { HiMenu } from "react-icons/hi";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar fixed="top">
      <Container>
    
        <Nav.Link as={HashLink} to="/#top">
          <div className="navbar-brand"></div>
        </Nav.Link>
        <Button variant="primary" className="d-lg-none" onClick={handleShow}>
          <span>
            <HiMenu />
          </span>
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          responsive="lg"
          placement="end"
          scroll="true"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>BCR</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to='/#our-services'>Our Services</Nav.Link>
              <Nav.Link as={HashLink} to='/#why-us'>Why Us</Nav.Link>
              <Nav.Link as={HashLink} to='/#testimonial'>Testimonial</Nav.Link>
              <Nav.Link as={HashLink} to='/#faq'>FAQ</Nav.Link>
              <Button variant="success">Register</Button>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
