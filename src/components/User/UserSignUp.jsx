import React from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

function UserSignUp() {
  return (
    <div className="user-sign-up">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className="email-input" type="email" placeholder="enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <InputGroup>
            <FormControl
              className="username-input"
              id="inlineFormInputGroupUsername"
              placeholder="create username"
            />
          </InputGroup>
        </Form.Group>
        <br/>
        <Form.Group className="mb-3" controlId="formBasicCreatePassword">
          <Form.Control
            className="password-input"
            type="password"
            placeholder="create password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Control
            className="password-input"
            type="password"
            placeholder="confirm password"
          />
        </Form.Group>
        <br/>
        <Button variant="green" type="submit">
          login
        </Button>
      </Form>
    </div>
  );
}

export default UserSignUp;
