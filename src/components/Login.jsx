import React from "react";
import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import logo from "../img/imagotipoBlanco.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/generalStyles.css";


class Login extends React.Component {

  render() {
    return (
      <div className="loginScreen">
        <Container fluid>
          <Row >
            <Navbar>
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  width="70"
                  height="70"
                  className="d-inline-block align-top"
                  alt="Shortie Logo"
                />
              </Navbar.Brand>
            </Navbar>
          </Row>
          <Row>
            <div className="centeredLogin" >
              <Col xs={12} className="mb-5">
                <span className="textTitleLogin">Login</span>
              </Col>
              <Col xs={12}>
                <div className="divFormLogin">
                  <input type="text" />
                  <div className="divFormTituloLogin">Correo</div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="divFormLogin">
                  <input type="text" />
                  <div className="divFormTituloLogin">Contraseña</div>
                </div>
              </Col>
              <Row className="mt-4">
                <Col xs={12} sm={6} >
                  <span className="buttonRegistro">¿No tienes cuenta?</span>
                </Col>
                <Col xs={12} sm={6} >
                  <Button className="buttonLogin">Entrar</Button>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);