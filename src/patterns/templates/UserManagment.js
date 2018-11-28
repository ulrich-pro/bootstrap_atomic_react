import React, { memo } from 'react';
import { Container, Row, Col } from 'reactstrap';

import RightSideBar from 'patterns/organisms/SideBars/RightSideBar';
import UserListContainer from 'patterns/organisms/UserList/UserListContainer';

const UserManagment = memo(props => (
  <Container>
    <Row>
      <Col>
        <UserListContainer />
      </Col>
      <Col md="3">
        <RightSideBar />
      </Col>
      {/* .... 
        other organisms */}
    </Row>
  </Container>
));

export default UserManagment;
