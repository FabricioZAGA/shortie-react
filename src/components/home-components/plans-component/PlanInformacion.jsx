import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/planStyle.css";
import tacos from "../../../img/tacos.jpg";

class Plans extends React.Component {
  render() {
    return (
      <div>
        <div className="container-plan">
          <div className="plan-title">PRO PLAN</div>
          <div className="curvas">
            <div className="curv curva-chica"></div>
            <div className="curv curva-opuesta-1"></div>
            <div className="curv curva-opuesta-2"></div>
            <div className="curv curva-opuesta-3"></div>
            <div className="curv curva-1"></div>
            <div className="curv curva-2"></div>
            <div className="curv curva-3"></div>
            <div className="curv curva-chica-2"></div>
            <div className="curv curva-opuesta-chica"></div>
            <div className="curv curva-opuesta-chica-2"></div>
            <div className="linea"></div>
            <div className="linea-2"></div>
          </div>
          <div className="plan-img">
            <img src={tacos}></img>
          </div>
          <div className="plan-texto">
            <h1 className="texto-subtitulo"> LIGTH CARD TITLE</h1>
            <h4 className="texto-descripcion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <div className="texto-boton">
              <button className="texto-boton-hover">CHOSSE PLAN</button>
            </div>
          </div>

          <div className="barra-sombra"></div>
        </div>
        <div className="phantom-plan"></div>
      </div>
    );
  }
}

export default withRouter(Plans);
