import React, { memo } from 'react';
import { Alert } from 'reactstrap';

const AlertAtm = memo(props => <Alert color={props.color || 'primary'}>{props.display}</Alert>);

export default AlertAtm;
