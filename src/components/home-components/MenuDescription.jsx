import React from "react";
import { withRouter } from "react-router-dom";
import { ListGroup, Container, Row, Col, Image } from "react-bootstrap";
import AccordionComponent from '../../objects/Accordion'
import "../../css/generalStyles.css";
class MenuDescription extends React.Component {
  render() {
    return (
      <div className="menu-visual-container" id="section1">
        <Container className="h-100">
          <Row style={{ height: "10%" }} >
            <Col className="d-flex justify-content-center align-items-center h-100">
              <h2 className="mb-md-5 mt-md-4 menuTitle">Menú Virtual</h2>
            </Col>
          </Row>
          <Row
            className="p-md-5 d-flex justify-content-center align-items-center"
            style={{ height: "90%" }}
          >
            <Col xs={12} md={7}>
              <AccordionComponent></AccordionComponent>
            </Col>
            
            <Col xs={12} md={5} className="mv-center-image-dlv order-md-last order-first">
              <img
                width="90%"
                src="https://picsum.photos/300/300"
                alt="descriptive image"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(MenuDescription);
