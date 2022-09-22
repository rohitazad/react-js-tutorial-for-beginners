import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = ()=>{
    return (
        <>
        <footer className="myfooter">
            <Container>
                <Row>
                    <Col>Footer 1</Col>
                    <Col>Footer 2</Col>
                </Row>
                <Row>
                    <Col>Copyright 2022</Col>
                </Row>
            </Container>
        </footer>
        </>
    )
}

export default Footer;