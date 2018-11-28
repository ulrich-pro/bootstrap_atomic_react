import React, { memo } from 'react';

import IncButton from 'patterns/atomes/Buttons/IncButton';
import NavLink from 'patterns/atomes/Texts/NavLink';

const ButtonLink = memo(props => (
  <div>
    <IncButton />
    <NavLink to="/usermanagment" display="Go to users" />
  </div>
));

export default ButtonLink;
