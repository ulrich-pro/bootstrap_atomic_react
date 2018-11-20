import React from 'react';
import { Alert } from 'reactstrap';

const AlertAtm = props => <Alert color={props.color || 'primary'}>{props.display}</Alert>;

export default AlertAtm;
