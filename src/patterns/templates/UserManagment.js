import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RightSideBar from '../organisms/SideBars/RightSideBar';
import UserListContainer from '../organisms/UserList/UserListContainer';

const UserManagment = props => (
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
);

export default UserManagment;
