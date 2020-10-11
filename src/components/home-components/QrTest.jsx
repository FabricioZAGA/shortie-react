import React from "react";
import { withRouter } from "react-router-dom";
import { ListGroup, Container, Row, Col, Image } from "react-bootstrap";
import "../../css/generalStyles.css";
import qrImage from "../../img/qrtest.png";
import { Waypoint } from "react-waypoint";

class QrTest extends React.Component {
  _hola() {
    console.log("hola");
  }
  _adios() {
    console.log("adios");
  }

  render() {
    return (
      <Waypoint
        onEnter={this._hola.bind(this)}
      >
        <Container id="section3">
          <Row clasName="p-5 mt-5">
            <Col sm={4}>
              <img src={qrImage} alt="qrImage" />
            </Col>
            <Col sm={8}>
              <h1 className="mt-5 qrTitle">Haz la prueba</h1>
              <h3>
                ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                eum iriure dolor in hendrerit in vul
              </h3>
            </Col>
          </Row>
        </Container>
      </Waypoint>
    );
  }
}

export default withRouter(QrTest);
