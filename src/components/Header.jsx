import React from "react";
import { Button, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <header style={{height:'12vh'}}>
      <Navbar
        bg="light"
        variant="light"
        expand="sm"
        collapseOnSelect
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
          <Link to='/'>
            <img src={logo} alt="proshop" className="imgWidth" />
          </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>

              <NavDropdown
                title="ABOUT"
                id="adminmenu"
              >
               <NavDropdown.Item> <Link to='/about'>institute</Link></NavDropdown.Item>
               <NavDropdown.Item> <Link to='/about'>leadership</Link></NavDropdown.Item>
               <NavDropdown.Item> <Link to='/about'>college</Link></NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="ADMISSION"
                id="admission"
              >
               <NavDropdown.Item> <Link to='/enquiry'>admission enquiry</Link></NavDropdown.Item>
               <NavDropdown.Item> <Link to='/enquiry'>required document</Link></NavDropdown.Item>
               <NavDropdown.Item> <Link to='/enquiry'>fees structure</Link></NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="PLACEMENTS"
                id="placement"
              >
                <NavDropdown.Item> <Link to='/placement'>placement</Link></NavDropdown.Item>
                <NavDropdown.Item> <Link to='/placement'>placed students</Link></NavDropdown.Item>
                <NavDropdown.Item> <Link to='/placement'>campus</Link></NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="IQAC" id="adminmenu" >
                <NavDropdown.Item>sample</NavDropdown.Item>
                <NavDropdown.Item>sample</NavDropdown.Item>
                <NavDropdown.Item>sample</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="NAAC" id="adminmenu" >
                <NavDropdown.Item>sample</NavDropdown.Item>
                <NavDropdown.Item>sample</NavDropdown.Item>
                <NavDropdown.Item>sample</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#home">ALUMNI</Nav.Link>

              <Button
                type="submit"
                className="p-2 mx-2 text-light "
                variant="danger"
              >
                Admission Form
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
