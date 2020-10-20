import React from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/fonts.css";
import "../../css/admin.css";

class NavbarAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.location.search,
      restaurantUser: props.match.params.name,
      estilo: ["", "", ""],
    };
  }

  async _applyChanges(num) {
    var array = this.state.estilo;
    for (let i = 0; i < array.length; i++) {
      if (i == num) {
        array[i] = "siempre-barras-selectio";
      } else {
        array[i] = "";
      }
    }
    this.setState({
      query: this.state.query,
      restaurantUser: this.state.restaurantUser,
      estilo: array,
    });
  }

  async componentDidMount() {
    this._applyChanges(this.props.num);
  }

  async _changePage(num) {

    var type = "home";
    switch (num) {
      case 1:
        this.props.history.push(
          `/admin/console/products/${this.state.restaurantUser}${this.state.query}`
        );
        type = "products";

        break;
      case 2:
        this.props.history.push(
          `/admin/console/upload/${this.state.restaurantUser}${this.state.query}`
        );
        type = "upload";
        break;
      case 3:
        this.props.history.push(
          `/admin/console/qr/${this.state.restaurantUser}${this.state.query}`
        );
        type = "qr";
        break;
      default:
        break;
    }

    this._applyChanges(num - 1);

    this.props.onSubmit(type);
    //
  }

  render() {
    return (
      <div className="d-flex">
        <div className="admin-bar-Menu">
          <div className="admin-bar-icons">
            <div className="admin-icon-btn">
              <span className="icon-eye"></span>
            </div>
            <div className="admin-icon-btn">
              <span className="icon-folder-upload"></span>
            </div>
            <div className="admin-icon-btn">
              <span className="icon-qr-code"></span>
            </div>
          </div>
          <div className="admin-bar-hover d-flex">
            <div className="admin-bar-btn-contenido">
              <button className="admin-bar-btn">
                Ver Productos
                <div
                  className={`barras-selection ${this.state.estilo[0]}`}
                  onClick={this._changePage.bind(this, 1)}
                ></div>
              </button>
              <button className="admin-bar-btn">
                Subir Producto
                <div
                  className={`barras-selection ${this.state.estilo[1]}`}
                  onClick={this._changePage.bind(this, 2)}
                ></div>
              </button>
              <button className="admin-bar-btn">
                Generar Qr
                <div
                  className={`barras-selection ${this.state.estilo[2]}`}
                  onClick={this._changePage.bind(this, 3)}
                ></div>
              </button>
            </div>
            <div className="admin-divition-vertical"></div>
          </div>
        </div>
        <div className="admin-divition-vertical"></div>
      </div>
    );
  }
}

export default withRouter(NavbarAdmin);
