import React from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import QrFooter from "./home-components/QrFooter";
import logo from "../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="phantom" />
        <div className="footer">
          <div className="footer-container">
            <div>
              <div className="footer-titulo">DESARROLLADO POR</div>
              <div className="footer-img">
                <img src={logo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
