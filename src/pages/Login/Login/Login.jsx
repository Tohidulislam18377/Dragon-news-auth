import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContact } from '../../../providers/AuthProvider';

const Login = () => {
  const {singIn} = useContext(AuthContact);
  const navigate = useNavigate()
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname||'/category/0'

  const handelSingIn = (event)=>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    singIn(email,password)

    .then((result)=>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from,{ replace: true })
     
    })
    .catch((error)=>{
      console.log(error);
    })
    
    

  }
    return (
        <Container className='mx-auto w-25 mt-2'>
            <h3>Please login</h3>
             <Form onSubmit={handelSingIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
        <Form.Text className="">
        Don'nt have an account?<Link to='/register'>Register</Link>
        </Form.Text>
        <Form.Text className="text-success">
        
        </Form.Text>
      <Form.Text className="text-danger">
          
        </Form.Text>
    </Form>
        </Container>
    );
};

export default Login;