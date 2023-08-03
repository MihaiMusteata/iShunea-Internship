import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../styles/navbar_white.css';
import menu_icon from '../images/menu-icon-black.png';
const imageLogo = new URL('../images/logo.png', import.meta.url);
const NavBarWhite = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="white" className="navbar-border">
            <style>
                {`
            .navbar-toggler-text,
            .nav-link,
            .nav-link:hover,
            .navbar-text a {
                color: black;
            }
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="blur-background" style={{ color: 'black', borderRadius: '50px', justifyContent: 'center', alignItems: 'center', border: '1px solid black' }} >
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-text bold-text " >menu</span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navbar-text">
                        <NavDropdown title="company">
                            <NavDropdown.Item href="/about" className="bold-text text-dark">about</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/career" className="bold-text text-dark">career</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/blog" className="bold-text text-dark">blog</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/services">services</Nav.Link>
                        <Nav.Link href="/works">works</Nav.Link>
                        <Nav.Link href="/contacts">contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <NavDropdown title="english" style={{ color: 'white' }} >
                    <NavDropdown.Item href="#action/3.1" className="bold-text text-dark">english</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2" className="bold-text text-dark">română</NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    );
};


export default NavBarWhite;
