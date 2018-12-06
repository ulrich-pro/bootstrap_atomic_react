import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const NavLink = memo(props => (
  <div className="nav-link">
    <Link to={props.to}>{props.display}</Link>
  </div>
));

export default NavLink;
