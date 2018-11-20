import React from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

import NavLink from '../../atomes/Texts/NavLink';
import LocalImage from '../../atomes/Images/LocalImage';

const Header = () => (
  <div className="header-org">
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
        <LocalImage src="logo.svg" alt="" />
      </NavbarBrand>
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/" display="Dashbord" />
          </NavItem>
          <NavItem>
            <NavLink to="/usermanagment" display="User Managment" />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
);

export default Header;
