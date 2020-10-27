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
          <div className="plan-title">FreePlan</div>
          <div className="curvas">
            <div className="linea"></div>
            <div className="linea-2"></div>
          </div>
          <div className="plan-img">
            <img src={tacos}></img>
          </div>
          <div className="plan-texto">
            <h1 className="texto-subtitulo"></h1>
            <h4 className="texto-descripcion">
              Utiliza Shortie completamente gratis, solo realiza tu registro, crea tu menú e imprime tu código QR, ASÍ DE FÁCIL, comienza a usar Shortie HOY.
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
