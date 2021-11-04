import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Router from 'next/router';
import { magic } from '../lib/magic';
import { UserContext } from '../lib/UserContext';
import { CallToAction, TextButton } from '@magiclabs/ui';

function NavbarCustom(props) {
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    magic.user.logout().then(() => {
      setUser({ user: null });
      Router.push('/login');
    });
  };

  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
      {user?.loading ? (
          // If loading, don't display any buttons specific to the loggedIn state
          <div style={{ height: '38px' }}></div>
        ) : user?.issuer ? (
        <>
          <Link href="/" passHref={true}>
            <Navbar.Brand>
              <img
                className="d-inline-block align-top"
                src={props.logo}
                alt="Logo"
                height="30"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="mr-1">
              <Link href="#contact" passHref={true}>
                <Nav.Link active={false}>Contact Us</Nav.Link>
              </Link>
              <Link href="#blog" passHref={true}>
                <Nav.Link active={false}>Blog</Nav.Link>
              </Link>
              <Link href="#faq" passHref={true}>
                <Nav.Link active={false}>FAQ</Nav.Link>
              </Link>
              <a>
                <TextButton color='warning' size='sm' onPress={logout}>
                  Logout
                </TextButton>
              </a>
            </Nav>
          </Navbar.Collapse>
        </>
        ) : (
          <li>
            <Link href='/login'>
              <CallToAction color='primary' size='sm'>
                Login
              </CallToAction>
            </Link>
          </li>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
