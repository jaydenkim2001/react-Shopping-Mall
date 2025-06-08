import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginPage.css';
import { useNavigate } from 'react-router';

const LoginPage = ({setAuthenticated}) => {
  
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault(); //This disables to form to stop refreshing the page on onSubmit.
    setAuthenticated(true);
    navigate('/');
  }

  return (
    <div className="login-background">
      <Container className="login-container">
        <h3 className="login-title">LOGIN</h3>
        <Form onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            LOG IN
          </Button>

          <div className="login-footer-text">
            New customer? <span className="create-account">Create an account</span>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default LoginPage