import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";

import logo from "../../Images/logo.png";
import CustomLink from "../CustomLink/CustomLink";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleLogout = () =>{
    signOut(auth);
    
    toast.success('Logout Successful', {id:'logout'});

  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} alt="" height={30} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink to="/home" className="nav-link">
                Home
              </CustomLink>
              <CustomLink to="/blog" className="nav-link">
                Blog
              </CustomLink>
              <CustomLink to="/about" className="nav-link">
                About me
              </CustomLink>
              {user?(<CustomLink to="/login" className="nav-link" onClick={handleLogout}>
                logout
              </CustomLink>):<CustomLink to="/login" className="nav-link">
                login
              </CustomLink>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;


