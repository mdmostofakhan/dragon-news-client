import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authproviders/AuthProvider";

const Login = () => {
  const { signIn} = useContext(AuthContext)

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
     
    console.log(email, password)
  }

  return (
    <Container className="mx-auto w-25">
        <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <Form.Text className="text-secondary">
            Don't Have an Account ? <Link to="/register">Register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
