import React from 'react';
import LocalImage from '../../atomes/Images/LocalImage';
import Alert from '../../atomes/Texts/Alert';
import { Row, Col } from 'reactstrap';

const User = props =>
  props.user && (
    <Row>
      <Col lg="2">
        <LocalImage imgClass="list-img" src="gimmick_daveo.png" alt="" />
      </Col>
      <Col>
        <Alert color={'light'} display={props.user.name} />
      </Col>
    </Row>
  );

export default User;
