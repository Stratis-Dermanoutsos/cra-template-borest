import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarCustom = () => {
    return (
        <Navbar bg='dark' expand='md' fixed='top' variant='dark'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Borest</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to='/home'>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to='/about'>
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarCustom;
