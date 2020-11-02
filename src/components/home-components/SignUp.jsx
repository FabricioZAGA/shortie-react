import React from "react";

import ApiService from "../../services/ApiService";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import EmailValidator from 'email-validator';
import 'sweetalert2/src/sweetalert2.scss'
import { withRouter } from "react-router-dom";
import { Form, Col, Button, Container, Row } from "react-bootstrap";
import "../../css/singUp.css";
import "../../css/generalStyles.css";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      lastName: ''
    };
  }

  _handleNameChange(event) {
    this.setState({
      ...this.state,
      name: event.target.value
    })
  }

  _handleLastNameChange(event) {
    this.setState({
      ...this.state,
      lastName: event.target.value
    })
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
    console.log(this.state.email.length)
    var validations = 0;
    if (EmailValidator.validate(this.state.email)) {
      validations++;
    }
    else {
      Swal.fire(
        '¡Atento!',
        'El Correo ingresado no es un correo válido',
        'question'
      )
    }
    const password = this.state.email;
    if (password.length > 7) {
      validations++;
    } else {
      Swal.fire(
        '¡Atento!',
        'La Contraseña tiene que ser mayor de 8 caracteres',
        'question'
      )
    }
    if (validations == 2) {
      var response = await ApiService.insert(this.state, 'personalInfo')
      if (response.status === 200) {
        this.props.history.push(`/login`)
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Ooopsi...',
          text: 'Algo no está bien',
        })
      }
    }
  }

  render() {
    return (
      <div className="sign-up-container" id="section4">
        <Container >
          <Row clasName="p-5">
            <Col xs="12" md={7}>
              <Row>
                <Col xs={12}>
                  <div className="div-form">
                    <input type="text" onInput={this._handleNameChange.bind(this)} />
                    <div className="div-form-titulo">Nombre</div>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="div-form">
                    <input type="text" onInput={this._handleLastNameChange.bind(this)} />
                    <div className="div-form-titulo">Apellido(s)</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="div-form">
                    <input type="text" onInput={this._handleEmailChange.bind(this)} />
                    <div className="div-form-titulo">Email</div>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="div-form">
                    <input type="password" onInput={this._handlePasswordChange.bind(this)} />
                    <div className="div-form-titulo">Contraseña</div>
                  </div>
                </Col>
              </Row>
              {/* <Row>
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
              </Row> */}

              <div className="d-flex align-items-center justify-content-end">
                <button className="div-form-button" onClick={this._handleSubmit.bind(this)}>Aceptar</button>
              </div>
            </Col>
            <Col xs="12" md={5} className="mt-md-5 pl-md-5 order-first order-md-last">
              <h1 className="mt-5 titulos">Registro</h1>
              <h3 className="qrContent">
                Ingresa tus datos y comienza hoy a usar Shortie.
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(SignUp);
