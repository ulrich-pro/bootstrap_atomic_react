import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LeftSideBar from '../organismes/SideBars/LeftSideBar';
import Welcome from '../organismes/Home/Welcome';

const Home = props => (
  <Container>
    <Row>
      <Col md="3">
        <LeftSideBar />
      </Col>
      <Col>
        <Welcome />
      </Col>
      {/* .... 
        other organismes */}
    </Row>
  </Container>
);

export default Home;
