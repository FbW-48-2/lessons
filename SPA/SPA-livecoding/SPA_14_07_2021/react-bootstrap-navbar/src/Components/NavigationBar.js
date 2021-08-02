import React from 'react';
import logo from '../logo.svg';
import { Nav , Navbar , NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
 

function NavigationBar() {
    return (
         <Navbar bg="danger" variant="dark" sticky ="top" expand ="sm" collapseOnSelect >
              
             <Navbar.Brand>
                <img src={logo}  width="45px" /> 
                DCI
             </Navbar.Brand>
             <Navbar.Toggle />             
             <Navbar.Collapse>
                 <Nav>
                     <NavDropdown title ="products" >
                         <LinkContainer to="/products/tea">
                            <NavDropdown.Item > Tea</NavDropdown.Item>
                         </LinkContainer>
                         
                         <NavDropdown.Item href="/products/coffee"> Coffee</NavDropdown.Item> 
                         <NavDropdown.Item href="/products/chocolate"> Chocolate</NavDropdown.Item>    
                     </NavDropdown>
                    <LinkContainer to='/about'>
                        <Nav.Link > About Us </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/contact'>
                        <Nav.Link  > Contact Us </Nav.Link>
                    </LinkContainer>
                     <LinkContainer to="/blog" >
                        <Nav.Link > Blog </Nav.Link>
                     </LinkContainer>
                 </Nav>
             </Navbar.Collapse>
         </Navbar>
    )
}

export default NavigationBar
 