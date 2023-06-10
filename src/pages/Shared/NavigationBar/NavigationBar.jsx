import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContact } from '../../../providers/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { useContext } from 'react';

const NavigationBar = () => {
  const {user,logOut} = useContext(AuthContact)

  const handelLogOut =()=>{
    logOut()
    .then()
    .catch((error)=>{
      console.log(error);
    })
  }
    return (
        <Container>
            
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
              <Link className='text-decoration-none mt-2' to='/category/0'>Home</Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
        { user&&
            <FaUserAlt className='me-3' style={{fontSize:'2rem'}}></FaUserAlt>
        }
          
          {user?
              <Button onClick={handelLogOut} variant="secondary">LogOut</Button>:
             <Link to='/login'>
             <Button variant="secondary">Login</Button>
             </Link>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;