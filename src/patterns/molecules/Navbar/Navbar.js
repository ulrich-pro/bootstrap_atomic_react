import React from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

import NavLink from 'patterns/atomes/Texts/NavLink';
import LocalImage from 'patterns/atomes/Images/LocalImage';

const NavbarMlc = () => (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
        <LocalImage src="logo_daveo.png" alt="" />
      </NavbarBrand>
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/" display="Home" />
          </NavItem>
          <NavItem>
            <NavLink to="/usermanagment" display="User Managment" />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
);

export default NavbarMlc;
