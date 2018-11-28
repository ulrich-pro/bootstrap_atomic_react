import React, { memo } from 'react';
import { Row, Col } from 'reactstrap';

import LocalImage from 'patterns/atomes/Images/LocalImage';
import Alert from 'patterns/atomes/Texts/Alert';

const User = memo(
  props =>
    props.user && (
      <Row>
        <Col lg="2">
          <LocalImage imgClass="list-img" src="gimmick_daveo.png" alt="" />
        </Col>
        <Col>
          <Alert color={'light'} display={props.user.name} />
        </Col>
      </Row>
    )
);

export default User;
