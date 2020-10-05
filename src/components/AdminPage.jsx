import React from "react";
import qs from "query-string";

import { withRouter, Switch, Route, Redirect } from "react-router-dom";

import AdminNavbar from "./admin-components/AdminNavbar";
import AdminDropDownBar from "./admin-components/AdminDropDownBar";
import ShowFood from "./admin-components/ShowFood";
import AddUpdateFood from "./admin-components/AddUpdateFood";
import DownloadQr from "./admin-components/DownloadQr";

import Cookies from "../services/CookiesService"

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/admin.css";
import Logo from "../img/logo.png";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: qs.parse(this.props.location.search).code,
      name: qs.parse(this.props.location.search).name,
      actualPage: props.match.params.type,
      restaurantUser: props.match.params.name,
      renderPage: "",
      propsNum: "",
    };
  }

  async componentDidMount() {
    if (!Cookies.get('login-record-set')) {
      this.props.history.push(
        `/home`)
    }

    document.title = `${this.state.restaurantUser} admin console`;

    this._changeComponent();
  }



  _changeComponent(actualPa) {
    if (actualPa === undefined) {
      actualPa = this.state.actualPage;
    }

    var component = "";
    var numero = "";
    switch (actualPa) {
      case "home":
        numero = (
          <AdminDropDownBar
            num={4}
            onSubmit={this._changeComponent.bind(this)}
          />
        );
        component = (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <img src={Logo} width="300"></img>
          </div>
        );
        break;
      case "qr":
        numero = (
          <AdminDropDownBar
            num={2}
            onSubmit={this._changeComponent.bind(this)}
          />
        );
        component = <DownloadQr code={this.state.id} />;
        break;
      case "products":
        numero = (
          <AdminDropDownBar
            num={1}
            onSubmit={this._changeComponent.bind(this)}
          />
        );
        component = <ShowFood />;
        break;
      case "upload":
        numero = (
          <AdminDropDownBar
            num={0}
            onSubmit={this._changeComponent.bind(this)}
          />
        );
        component = <AddUpdateFood />;
        break;
      default:
        break;
    }

    this.setState({
      ...this.state,
      actualPage: actualPa,
      renderPage: component,
      propsNum: numero,
    });

  }

  render() {
    return (
      <div className="admin-principal-container">
        <AdminNavbar name={this.state.name} />
        <div className="d-flex">
          {this.state.propsNum}

          <div className="admin-bar-content">{this.state.renderPage}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminPage);
