import React, { memo } from 'react';
import { Container, Row, Col } from 'reactstrap';

import LeftSideBar from 'patterns/organisms/SideBars/LeftSideBar';
import Welcome from 'patterns/organisms/Home/Welcome';

const Home = memo(props => (
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
));

export default Home;
