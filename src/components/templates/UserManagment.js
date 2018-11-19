import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RightSideBar from '../organismes/SideBars/RightSideBar';
import UserList from '../organismes/UserList/UserList';

const UserManagment = props => (
  <Container>
    <Row>
      <Col>
        <UserList/>
      </Col>
      <Col md="3">
        <RightSideBar />
      </Col>
      {/* .... 
        other organismes */}
    </Row>
  </Container>
);

export default UserManagment;
