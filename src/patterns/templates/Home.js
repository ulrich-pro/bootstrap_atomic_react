import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LeftSideBar from '../organisms/SideBars/LeftSideBar';
import Welcome from '../organisms/Home/Welcome';

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
        other organisms */}
    </Row>
  </Container>
);

export default Home;
