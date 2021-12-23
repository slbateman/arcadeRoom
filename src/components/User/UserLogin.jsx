//UserLogin.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import { Link } from "react-router-dom";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import users from "../DataFile"

function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkAuth = (e) => {
    e.preventDefault();
    if (username === "") return alert("username cannot be empty");
    if (password === "") return alert("password cannot be empty");
    let user = users.find((e) => e.name === username)
    if (!user) return alert("user not found")
    alert(user.name);
  };

  return (
    <div className="user-login">
      <Form
        onSubmit={(e) => {
          checkAuth(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <InputGroup>
            <FormControl
              className="username-input"
              id="inlineFormInputGroupUsername"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
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
          <p className="sign-up-link">sign up</p>
        </Link>
      </Form>
    </div>
  );
}

export default UserLogin;
