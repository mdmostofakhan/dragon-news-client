import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import QZone from '../qzone/QZone';
import './RightNav.css';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <div>
            <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
            <Button className='mb-4' variant="outline-secondary"><FaGithub></FaGithub>  Login With Github</Button>
            </div>
            <div>
                <h3>Find Us On</h3>
                <ListGroup variant="flush">
                    <ListGroup.Item className='mb-2'> <FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-4'> <FaInstagram/> Instagram</ListGroup.Item>
                 </ListGroup>
            </div>
            <div >
                <QZone></QZone>
            </div>
            <div className='right-container'>
                <h4 className='text-white text-center mb-4'>Create an Amazing Newspaper</h4>
                <h4 className='text-white text-center m-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h4>
                <Button variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;