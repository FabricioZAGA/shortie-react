import React from "react";
import ApiService from '../services/ApiService';
import Cookies from '../services/CookiesService'
import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import logo from "../img/imagotipoBlanco.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/generalStyles.css";



class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ' ',
      password: ' '
    };
  }

  _handleEmailChange(event) {
    this.setState({
      ...this.state,
      email: event.target.value
    })
  }

  _handlePasswordChange(event) {
    this.setState({
      ...this.state,
      password: event.target.value
    })
  }

  async _handleSubmit() {
    var response = await ApiService.getById(this.state.email, 'personalInfo')
    response = response.data;

    if (response) {
      if (response.password == this.state.password) {
        Cookies.set('login-record-set', { response, bool: true })
        this.props.history.push(
          `/admin/console/home/${response.restaurantName}?name=${response.email}`)
      }
    }
  }

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
                  <input type="text" onInput={this._handleEmailChange.bind(this)} />
                  <div className="divFormTituloLogin">Correo</div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="divFormLogin">
                  <input type="password" onInput={this._handlePasswordChange.bind(this)} />
                  <div className="divFormTituloLogin">Contraseña</div>
                </div>
              </Col>
              <Row className="mt-4">
                <Col xs={12} sm={6} >
                  <span className="buttonRegistro">¿No tienes cuenta?</span>
                </Col>
                <Col xs={12} sm={6} >
                  <Button className="buttonLogin" onClick={this._handleSubmit.bind(this)}>Entrar</Button>
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