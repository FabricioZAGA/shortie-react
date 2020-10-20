import React from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteModal from './DeleteModal';
import Cookies from '../../services/CookiesService'


class Plans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.imagen,
      title: props.titulo,
      description: props.desc,
      index: props.index,
      query: this.props.location.search,
    };
  }

  _handleMoveToPage(value) {
    if (value != undefined) {
      Cookies.set('object-index', this.state.index)
      this.props.history.push(
        `/admin/console/upload/${Cookies.get('login-record-set').restaurantUser}${this.state.query}`
      );
      window.location.reload(false)
    }

  }

  render() {
    return (
      <div className="plate-container">
        <div
          className="plate-img"
          style={{ backgroundImage: `url(${this.state.img})` }}
        ></div>
        <div className="plate-text">
          <h1>{this.state.title}</h1>
          <h2>{this.state.description}</h2>
        </div>
        <div className="plate-buttons">
          <button className="label-input-file" onClick={this._handleMoveToPage.bind(this, 0)}>EDITAR</button>
          <DeleteModal id={this.state.index}></DeleteModal>
        </div>
      </div>
    );
  }
}

export default withRouter(Plans);
