import React from 'react';
import logo from '../../../assets/logo.png'
import Marquee from "react-fast-marquee";
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';





const Header = () => {
    return (
        <Container className='mt-4'>
             
       <div className='text-center mt-5 '>
            <img src={logo} alt="" />
            <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format('LLLL')}</p>
        </div>

           <div className='d-flex mb-4'>
              <Button variant="danger">latest</Button>
              <Marquee speed={100} className='text-danger'>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            </div>

            <div>
            <Navbar expand="lg" bg='light' className="light mb-4">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#home">
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">career</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#home">profile</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    <Button variant="secondary">Login </Button>
                    </Nav.Link>


                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
                    </div>

                </Container>
    );
};

export default Header;