import React from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Logo from "../../img/logoReducido.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/fonts.css";
import "../../css/admin.css";
import Cookies from "../../services/CookiesService"

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleExitButton() {
    Cookies.remove('login-record-set')
    this.props.history.push(
      `/home`)
  }

  render() {
    return (
      <div>
        <div className="NavbarAdmin bg-light">
          <div className="imgNavbarAdmin" >
            <h6 className="icon-logo-reducido"></h6>
            <h1></h1>
          </div>
          <div className="navExit">
            <h1>{this.props.name}</h1>
            <h6 className="icon-exit" onClick={this._handleExitButton.bind(this)}></h6>
          </div>
        </div>
        <div className="admin-divition-horizontal">

        </div>
      </div>
    );
  }
}

export default withRouter(AdminNavbar);
