//UserLogin.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import { Link } from "react-router-dom";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUsers } from "../../state/usersSlice";

function UserLogin() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkAuth = (e) => {
    e.preventDefault();
    if (username === "") return alert("username cannot be empty");
    if (password === "") return alert("password cannot be empty");
    const user = users.find((e) => e.username === username)
    if (!user) return alert("user not found");
    if (user.password === "") alert("you cannot login as an anonymous user")
    if (password === user.password) {
      dispatch(
        loginUser({
          user_id: user._id,
          loggedIn: true,
        })
      );
    }
  };

  return (
    <div className="user-login">
      <Form
        onSubmit={(e) => {
          checkAuth(e);
        }}
      >
        <Form.Group className="mb-3" >
          <InputGroup>
            <FormControl
              className="username-input"
              id="inlineFormInputGroupUsername"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value.toLowerCase());
              }}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control
            className="password-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="green" type="submit">
          login
        </Button>
        <br />
        <Link to="/user/sign-up">
          <span className="sign-up-link">sign up</span>
        </Link>
      </Form>
    </div>
  );
}

export default UserLogin;
