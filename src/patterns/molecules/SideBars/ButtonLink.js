import React from 'react';
import IncButton from '../../atomes/Buttons/IncButton';
import NavLink from '../../atomes/Texts/NavLink';

const ButtonLink = props => (
  <div>
    <IncButton />
    <NavLink to="/usermanagment" display="Go to users" />
  </div>
);

export default ButtonLink;
