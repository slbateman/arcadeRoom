//UserLogin.jsx
//Chatroom Assignment
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario

import { Link } from "react-router-dom";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

function UserLogin() {

  return (
    <div className="user-login">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <InputGroup>
            <FormControl
              className="username-input"
              id="inlineFormInputGroupUsername"
              placeholder="username"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="password-input"
            type="password"
            placeholder="password"
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
