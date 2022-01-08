//UserSignUp.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import React from "react";
import { useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUsers } from "../../state/usersSlice";
import defaultAvatar from "../../images/defaultAvatar.png"
import { postUser } from "../../actions/userActions";


function UserSignUp() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const checkAuth = (e) => {
    e.preventDefault();
    if (email === "") return alert("email cannot be empty");
    if (username === "") return alert("username cannot be empty");
    if (password1 === "") return alert("create password cannot be empty");
    if (password2 === "") return alert("confirm password cannot be empty");
    let user = users.find((e) => e.username === username);
    if (user) return alert("username already exists");
    if (password1 !== password2) alert("your passwords down't match");
    dispatch(
      postUser({
        username: username,
        password: password1,
        email: email,
      })
    );
  };

  return (
    <div className="user-sign-up">
      <Form
        onSubmit={(e) => {
          checkAuth(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="email-input"
            type="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <InputGroup>
            <FormControl
              className="username-input"
              id="inlineFormInputGroupUsername"
              placeholder="create username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </InputGroup>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicCreatePassword">
          <Form.Control
            className="password-input"
            type="password"
            placeholder="create password"
            value={password1}
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Control
            className="password-input"
            type="password"
            placeholder="confirm password"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
        </Form.Group>
        <br />
        <Button variant="green" type="submit">
          login
        </Button>
      </Form>
    </div>
  );
}

export default UserSignUp;
