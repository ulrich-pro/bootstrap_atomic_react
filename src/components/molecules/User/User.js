import React from 'react';
import LocalImage from '../../atomes/Images/LocalImage';
import Alert from '../../atomes/Texts/Alert';
import { Row, Col } from 'reactstrap';

const User = props =>
  props.user && (
    <Row>
      <Col lg="1">
        <LocalImage imgClass="list-img" src="logo.svg" alt="" />
      </Col>
      <Col>
        <Alert color={'light'} display={props.user.name} />
      </Col>
    </Row>
  );

export default User;
