import { Form, Button, } from "react-bootstrap";
import React from "react";
<link rel="stylesheet" href="app.css"></link>

const Faorm = () => {
  return (
    <div className="aa">
      <Form className="container col-md-6">
      <Form.Text className="text-muted">
           #1 Website for fans of "The Godfather" movie
          </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" type="submit" >
          Submit
        </Button>
        
      </Form>

    </div>
  );
};

export default Faorm;
