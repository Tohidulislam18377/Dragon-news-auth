
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, } from 'react-bootstrap';
import Marquee from "react-fast-marquee";





const Header = () => {
 
  return (
    <Container className='mt-3'> 
      <div className="text-center">
        <img src={logo} alt="" />
        <p><small>Journalism Without Fear or Favor</small></p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className='d-flex'>
        <Button variant="danger">Danger</Button>
        <Marquee className='text-danger' speed={100}> 
          I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text...
        </Marquee>
      </div>
    
    </Container>
  );
};

export default Header;