import React from 'react';
import Header from '../pages/sharet/header/Header';
import Footer from '../pages/sharet/fooder/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/sharet/leftNav/LeftNav';
import RightNav from '../pages/sharet/rightNav/RightNav';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Header></Header>

     <Container>
               
                <Row>
                    <Col lg={3}>
                      <LeftNav></LeftNav>
                    </Col>

                    <Col lg={6}>
                        <Outlet></Outlet>
                    
                    </Col>
                   
                    <Col lg={3}>
                       <RightNav></RightNav>
                    </Col>
                </Row>
    </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;