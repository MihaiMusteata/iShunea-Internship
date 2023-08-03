import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import menu_icon from '../images/menu-icon-white.png';
const imageLogo = new URL('../images/logo.png', import.meta.url);

const NavBar = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="transparent" className="navbar-border">
            <style>
                {`
                    .navbar-toggler-icon {
                        background-image: url(${menu_icon});
                        margin : 0 10px 0 10px;
                        width: 20px;
                        height: 30px;
                    }
                    
            `}
            </style>
            <Container>
                <Navbar.Brand href="/home">
                    <img src={imageLogo} alt="Logo" className="mr-auto navbar-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="blur-background" style={{ borderRadius: '50px', justifyContent: 'center', alignItems: 'center', border: '1px solid #ffffffa5' }} >
                    <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
                    <span className="navbar-toggler-text bold-text " style={{ color: 'white' }}>menu</span>
                </Navbar.Toggle>
                <NavDropdown title="english" style={{ color: 'white' }} >
                    <NavDropdown.Item href="#action/3.1" className="bold-text text-dark">english</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2" className="bold-text text-dark">română</NavDropdown.Item>
                </NavDropdown>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navbar-text">
                        <NavDropdown title="company">
                            <NavDropdown.Item href="/about" className="bold-text text-dark">about</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/careers" className="bold-text text-dark">career</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/blog" className="bold-text text-dark">blog</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/services">services</Nav.Link>
                        <Nav.Link href="/works">works</Nav.Link>
                        <Nav.Link href="/contacts">contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default NavBar;
