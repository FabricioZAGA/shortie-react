import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Col, Button, Container, Row } from "react-bootstrap";
import "../../css/singUp.css";
import "../../css/generalStyles.css";
class SignUp extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row clasName="p-5">
            <Col sm={7}>
              <Row>
                <Col xs={6}>
                  <div className="div-form">
                    <input type="text" />
                    <div className="div-form-titulo">Nombre</div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="div-form">
                    <input type="text" />
                    <div className="div-form-titulo">Apellido(s)</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <div className="div-form">
                    <input type="text" />
                    <div className="div-form-titulo">Email</div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="div-form">
                    <input type="password" />
                    <div className="div-form-titulo">Contraseña</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="div-form">
                    <input type="number" />
                    <div className="div-form-titulo">Teléfono</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="div-form">
                    <input type="text" />
                    <div className="div-form-titulo">Dirección</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <div className="div-form">
                    <input type="text" />
                    <div className="div-form-titulo">Ciudad</div>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="div-form">
                    <input type="text" />
                    <div className="div-form-titulo">Estado</div>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="div-form">
                    <input type="number" />
                    <div className="div-form-titulo">C.P.</div>
                  </div>
                </Col>
              </Row>

              <div>
                <button className="div-form-button">Aceptar</button>
              </div>
            </Col>
            <Col sm={5} className="mt-5 pl-5">
              <h1 className="mt-5 titulos">Registro</h1>
              <h3>
                ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                eum iriure dolor in hendrerit in vul
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(SignUp);
