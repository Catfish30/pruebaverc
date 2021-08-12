import React from 'react'
import { Navbar,Container,Nav,Image,Button } from 'react-bootstrap'
import logo from '../assets/logo-vizcaya.png'
import { Link } from 'react-router-dom'

export default function NavTop() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand>
                <Image src={logo} rounded style={{height:'50px'}} />
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="ps-4">
                <Nav className="me-auto">
                    <Nav.Item>
                        <Link to='/' className='nav-link'>
                            Inicio
                        </Link>
                    </Nav.Item>                
                </Nav>
                <Button variant="danger">Salir</Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
