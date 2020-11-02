import React from "react";
import { withRouter } from "react-router-dom";
import { ListGroup, Container, Row, Col, Image } from "react-bootstrap";
import "../../css/generalStyles.css";
import qrImage from "../../img/qrtest.png";

class QrTest extends React.Component {
  render() {
    return (
      <div className="qr-test-container" id="section3">
        <Container>
          <Row clasName="p-5 mt-5">
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <img src={qrImage} width="100%" alt="qrImage" />
            </Col>
            <Col md={8} className="order-md-last order-first d-flex justify-content-center align-items-center">
              <div>
                <h1 className="qrTitle ">Haz la prueba</h1>
                <h3 className="qrContent ">
                  Escanea este código QR para que puedas observar un ejemplo de
                  como se vería tu menú digital, en Shortie buscamos que puedas
                  mostrar tus productos de una manera simple y limpia,
                  ¡COMPRUÉBALO!
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(QrTest);
