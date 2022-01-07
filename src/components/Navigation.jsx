//Navigation.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import { useState, useEffect } from "react";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  selectLocalUserInfo,
  selectUsers,
} from "../state/usersSlice";

function Navigation() {
  const dispatch = useDispatch();
  const localUserInfo = useSelector(selectLocalUserInfo);
  const loggedIn = localUserInfo.loggedIn;
  const users = useSelector(selectUsers);
  const userIndex = localUserInfo.userIndex;
  

  const logout = () => {
    dispatch(
      addUser({
        userIndex: users.length,
        username: `user${users.length}`,
      })
    );
  };

  const [chat, setChat] = useState("");
  const [about, setAbout] = useState("");
  const [user, setUser] = useState("");
  const location = useLocation().pathname;
  const [test, setTest] = useState(""); 
  const navigate = useNavigate()

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
    else if (location === "/test") {
      setUser("active");
      setChat("");
      setAbout("");
    }
    else {
      setUser("");
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
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav default activeKey="/" className="ms-auto">
                <Link className={"link " + chat} to="/chat">
                  Chatrooms
                </Link>
                <Link className={"link " + about} to="/about">
                  About Us
                </Link>
              {loggedIn ? (
                <Nav.Link>
                  <div className="nav-profile-dropdown">
                    <img
                      className="nav-profile-pic"
                      style={{ border: `1px solid ${users[userIndex].color}` }}
                      src={users[userIndex].avatar}
                      alt=""
                      onClick={()=> {navigate('/user/profile')}}
                    />
                    <NavDropdown className="dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item>
                        <Link className="dropdown-item" to="/user/profile">
                          Profile
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="dropdown-item" to="/user/settings">
                          Settings
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <Link className="dropdown-item" to="/user/leaderboard">
                          Leaderboard
                        </Link>
                      </NavDropdown.Item>
                      
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        onClick={() => {
                          logout();
                        }}
                      >
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </Nav.Link>
              ) : (
                  <Link className={"link " + user} to="/user/login">
                    Login
                  </Link>
              )}

           <Nav.Link eventKey="test">
                <Link className={"link " + test} to="/test">
                  test
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
