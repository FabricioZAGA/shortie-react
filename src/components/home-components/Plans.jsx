import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PlanInformation from "./plans-component/PlanInformacion";

class Plans extends React.Component {
  render() {
    return (
      <div className="plans-principal-container" id="section2">
        <Container>
          <Row className="justify-content-center">
            <Col xs="12" sm="7" md="4">
              <PlanInformation />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Plans);
