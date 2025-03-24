import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png'
import '../App.css'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      {/*   <Navbar style={{backgroundColor:"#f2ebeb"}} fixed='top' >
            <Container>
              <Navbar.Brand><img style={{width:"40px" , height:"30px"}} src={logo} alt="" /> MartechBees</Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link href="#home" className='me-3 bold'>Content</Nav.Link>
                <Nav.Link href="#features">Users</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
 */}
 <Navbar style={{ backgroundColor: "#f2ebeb" }} fixed="top" expand="lg" className='mb-0'>
      <Container>
        <Row className="w-100">
          <Col xs={6} md={3}>
            <Navbar.Brand>
              <img style={{ width: "40px", height: "30px" }} src={logo} alt="MartechBees Logo" />
              MartechBees
            </Navbar.Brand>
          </Col>
          <Col xs={6} md={9} className="text-end">
            <Navbar.Toggle aria-controls="navbar-nav" />
          </Col>
        </Row>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
           <Link  to={'/dashboard'} style={{textDecoration:'none'}}> <Nav.Link href="#home" className="me-3 bold">Content</Nav.Link></Link>
            <Nav.Link href="#features">Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          
    </>
  )
}

export default Header