import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png'
import '../App.css'

function Header() {
  return (
    <>
        <Navbar style={{backgroundColor:"#f2ebeb"}} fixed='top' >
            <Container>
              <Navbar.Brand><img style={{width:"40px" , height:"30px"}} src={logo} alt="" /> MartechBees</Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link href="#home" className='me-3 bold'>Content</Nav.Link>
                <Nav.Link href="#features">Users</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
    </>
  )
}

export default Header