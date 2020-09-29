import React from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Logo from "../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar.css";

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
    return this.state.elements.map((p) => (
      <button className="buttonNavbar">{p.name}</button>
    ));
  }

  render() {
    return (
      <div className="Navbar">
        <div className="imgNavBar">
          <img src={Logo} />
        </div>
        <div className="medioHamburger">{this._renderCenterButton()}</div>
        <div className="iniciarSesion">
          <button>INICIAR SESIÓN</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
