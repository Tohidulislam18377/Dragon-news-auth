import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContact } from '../../../providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
  const {createUser} = useContext(AuthContact);
  const [accepted,setAccepted] = useState(false)

  const handelRegister = (event)=>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name,photo,email,password);
    createUser(email,password)
    
    .then((result)=>{
      const createdUser = result.user;
      console.log(createdUser);
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  const handelAccept =(event)=>{
    setAccepted(event.target.checked);
  }


    return (
        <Container className='mx-auto w-25 mt-2'>
        <h3>Please register</h3>
         <Form onSubmit={handelRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Name</Form.Label>
    <Form.Control name='name' type="text" placeholder="Name" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control name='photo' type="text" placeholder="Photo" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name='email' type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name='password' type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check 
    onClick={handelAccept}
    type="checkbox"
     name='accept'
      label={<>Accept <Link to='/terms'>terms and condition</Link></>} />
  </Form.Group>
  <Button variant="primary" disabled={!accepted} type="submit">
   Register
  </Button>
  <br />
    <Form.Text className="">
    Already have an account?<Link to='/login'>Login</Link>
    </Form.Text>
    <Form.Text className="text-success">
    
    </Form.Text>
  <Form.Text className="text-danger">
      
    </Form.Text>
</Form>
    </Container>
    );
};

export default Register;