import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mb-2 mt-3'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle />Login With Google</Button>
            <Button className='mb-4' variant="outline-primary"> <FaGithub />Login With Github</Button>

            <div className='mb-3'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;