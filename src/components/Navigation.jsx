import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Navigation() {
  const [chat, setChat] = useState("");
  const [about, setAbout] = useState("");
  const [user, setUser] = useState("");
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === "/chat") {
      setChat("active");
      setAbout("");
      setUser("");
    } else if (location === "/about") {
      setAbout("active");
      setChat("");
      setUser("");
    } else if (location === "/user/login") {
      setUser("active");
      setChat("");
      setAbout("");
    }
  }, [location]);

  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="md" bg="black" variant="dark">
        <Container fluid>
          <Link className="nav-link logo" to="/">
            Arcade Room
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav default activeKey="/" className="ms-auto">
              <Nav.Link eventKey="chat">
                <Link className={"link " + chat} to="/chat">
                  Chatrooms
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={"link " + about} to="/about">
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className={"link " + user} to="/user/login">
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
