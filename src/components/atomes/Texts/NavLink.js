import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = props => (
  <div className="nav-link">
    <Link to={props.to}>{props.display}</Link>
  </div>
);

export default NavLink;
