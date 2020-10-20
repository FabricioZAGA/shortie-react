import React from "react";
import ApiService from '../services/ApiService';
import Cookies from '../services/CookiesService'
import { Container, Row, Col, Navbar, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import logo from "../img/imagotipoBlanco.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/newUser.css";



class NewUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: Number,
      restaurantName: '',
      restaurantAddress: {
        country: '',
        zipCode: Number,
        address: '',
        state: '',
        city: ''

      }
    };
  }

  _handleRestaurantNameChange(event) {
    this.setState({
      ...this.state,
      restaurantName: event.target.value
    })
  }

  _handleAddressChange(event) {
    this.setState({
      ...this.state,
      restaurantAddress: {
        ...this.state.restaurantAddress,
        address: event.target.value,
      }
    })
  }

  _handleCityChange(event) {
    this.setState({
      ...this.state,
      restaurantAddress: {
        ...this.state.restaurantAddress,
        city: event.target.value,
      }
    })
  }

  _handleStateChange(event) {
    this.setState({
      ...this.state,
      restaurantAddress: {
        ...this.state.restaurantAddress,
        state: event.target.value,
      }
    })
  }

  _handleCountryChange(event) {
    this.setState({
      ...this.state,
      restaurantAddress: {
        ...this.state.restaurantAddress,
        country: event.target.value,
      }
    })
  }

  _handleZipCodeChange(event) {
    this.setState({
      ...this.state,
      restaurantAddress: {
        ...this.state.restaurantAddress,
        zipCode: Number(event.target.value)
      }
    })
  }

  _handlePhoneNumberChange(event) {
    this.setState({
      ...this.state,
      phoneNumber: Number(event.target.value)
    })
    console.log(this.state)
  }

  async _handleSubmit() {
    const email = Cookies.get('login-record-set').response.email
    var response = await ApiService.update(email, this.state, 'personalInfo')
    response = response.data;
    Cookies.set('login-record-set', response)
    ///home/${response.restaurantName}?name=${response.email}`
    if (response && response != undefined) {
      const obj = {
        userEmail: response.email,
        logoImg: 'https://shortie-images.s3.us-east-2.amazonaws.com/imagotipo.jpg',
        bannerImg: 'https://shortie-images.s3.us-east-2.amazonaws.com/imagotipoBlanco.jpg',
      }
      var response2 = await ApiService.insert(obj, 'menus')

      console.log(response.restaurantName, response.email)
      this.props.history.push(
        `/admin/console/home/${response.restaurantName}?name=${response.email}`)

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
            <div className="centeredDiv" >
              <Col xs={12} className="">
                <span className="textTitleLogin">Completa tus Datos Personales</span>
              </Col>
              <Row>
                <Col xs={12}>
                  <div className="divFormNewReg">
                    <input type="text" onInput={this._handleRestaurantNameChange.bind(this)} placeholder="Nombre de tu Restaurante" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="divFormNewReg">
                    <input type="text" onInput={this._handleAddressChange.bind(this)} placeholder="Dirección" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <div className="divFormNewReg">
                    <input type="text" onInput={this._handleCityChange.bind(this)} placeholder="Ciudad" />
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="divFormNewReg">
                    <input type="text" onInput={this._handleStateChange.bind(this)} placeholder="Estado" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <div className="divFormNewReg">
                    <input type="text" onInput={this._handleCountryChange.bind(this)} placeholder="País" />
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="divFormNewReg">
                    <input type="number" onInput={this._handleZipCodeChange.bind(this)} placeholder="C.P." />
                  </div>
                </Col>

              </Row>
              <Row>
                <Col xs={6}>
                  <div className="divFormNewReg">
                    <input type="number" onInput={this._handlePhoneNumberChange.bind(this)} placeholder="Teléfono" />
                  </div>
                </Col>
                <Col xs={6} sm={6} >
                  <Button className="buttonNew" onClick={this._handleSubmit.bind(this)}>Entrar</Button>
                </Col>
              </Row>

            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(NewUser);