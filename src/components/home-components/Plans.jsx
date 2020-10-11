import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import PlanInformation from './plans-component/PlanInformacion'


class Plans extends React.Component {


  render() {
    return (
      <Container id="section2">
        <Row className="justify-content-center">
          <Col xs="7" md="3" className="pt-md-3">
            <PlanInformation />
          </Col>
          <Col xs="7" md="4">
            <PlanInformation />
          </Col>
          <Col xs="7" md="3" className="pt-md-3">
            <PlanInformation />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Plans);