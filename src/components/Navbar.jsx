import React from "react";

import Cookies from "../services/CookiesService";

import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Logo from "../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
    };
  }



  async componentDidMount() {
    this.setState({
      elements: [
        { name: "MENÚ VISUAL" },
        { name: "PLANES" },
        { name: "PRUEBA" },
        { name: "REGISTRO" },
      ],
    });
  }

  _renderCenterButton() {

    return this.state.elements.map((p, index) => (
      <Link
        className="buttonNavbar"
        to={`section${index + 1}`}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {p.name}</Link>
    ));
  }

  _handleLoginButton() {

    if (Cookies.get('login-record-set')) {

      console.log(Cookies.get('login-record-set'), "AIUIDAAAAAAAAAAAAAAAAAAAAAAAAA")
      const response = Cookies.get('login-record-set');
      // this.props.history.push(
      //   `/home`)

      this.props.history.push(
        `/admin/console/home/${response.restaurantName}?name=${response.name}`)
    } else {
      this.props.history.push(
        `/login`)
    }

  }


  render() {
    return (
      <div>
        <div className="navContainer"></div>
        <div className="Navbar">
          <div className="imgNavBar">
            <img src={Logo} onClick={scroll.scrollToTop()} style={{ cursor: "pointer" }} />
          </div>
          <div className="medioHamburger">{this._renderCenterButton()}</div>
          <div className="iniciarSesion">
            <button onClick={this._handleLoginButton.bind(this)}>INICIAR SESIÓN</button>
          </div>

        </div>
      </div>

    );
  }
}

export default withRouter(Navbar);
