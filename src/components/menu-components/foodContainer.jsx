import React from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Plans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.imagen,
      title: props.titulo,
      description: props.desc,
    };
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
          <button className="label-input-file">GUARDAR</button>
          <button className="icon-bin2 label-input-file red-color"></button>
        </div>
      </div>
    );
  }
}

export default withRouter(Plans);
