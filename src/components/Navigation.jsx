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
  editUserActive,
  selectLocalUserInfo,
  selectUsers,
} from "../state/usersSlice";
import { postUser } from "../actions/userActions";
import { updateUser } from "../api/userAPI";

function Navigation() {
  const dispatch = useDispatch();
  const localUserInfo = useSelector(selectLocalUserInfo);
  const loggedIn = localUserInfo.loggedIn;
  const users = useSelector(selectUsers);
  const user = users.find((e) => e._id === localUserInfo.user_id);

  const logout = () => {
    const randomNumber = Math.floor(Math.random() * 100000000000000);
    const userData = {
      _id: localUserInfo.user_id,
      socket_id: "",
      active: false,
    };
    updateUser(userData._id, {
      active: userData.active,
      socket_id: userData.socket_id,
    });
    dispatch(editUserActive(userData));
    dispatch(
      postUser({
        username: `user${randomNumber}`,
        password: "",
      })
    );
  };

  const [chat, setChat] = useState("");
  const [about, setAbout] = useState("");
  const [login, setLogin] = useState("");
  const location = useLocation().pathname;

  const navigate = useNavigate();

  // const [test, setTest] = useState("");

  useEffect(() => {
    if (location === "/chat") {
      setChat("active");
      setAbout("");
      setLogin("");
    } else if (location === "/about") {
      setAbout("active");
      setChat("");
      setLogin("");
    } else if (location === "/user/login") {
      setLogin("active");
      setChat("");
      setAbout("");
    } else if (location === "/test") {
      setLogin("active");
      setChat("");
      setAbout("");
    } else {
      setLogin("");
      setChat("");
      setAbout("");
    }
  }, [location]);

  return !users ? (
    <div></div>
  ) : (
    <div className="navigation">
      <Navbar collapseOnSelect expand="md" bg="black" variant="dark">
        <Container fluid>
          <Link className="nav-link logo" to="/">
            Arcade Room
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav default activeKey="/" className="ms-auto">
              <Link className={"link " + chat} to="/chat/general">
                Chatrooms
              </Link>
              <Link className={"link " + about} to="/about">
                About Us
              </Link>
              {!user ? (
                <div></div>
              ) : loggedIn ? (
                <div className="nav-profile-dropdown">
                  <img
                    className="nav-profile-pic"
                    style={{ border: `1px solid ${user.color}` }}
                    src={user.avatar}
                    alt=""
                    onClick={() => {
                      navigate("/user/profile");
                    }}
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
              ) : (
                <Link className={"link " + login} to="/user/login">
                  Login
                </Link>
              )}

              {/* <Link className={"link " + test} to="/test">
                test
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
