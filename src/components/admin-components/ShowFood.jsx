import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/ShowFood.css";
import FoodContainer from "../menu-components/foodContainer";

class ShowFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [1, 1, 1, 1, 1, 1, 11, 1],
    };
  }

  _renderFootChoice() {
    return this.state.food.map((f) => (
      <Col sm="6" md="4" lg="3">
        <FoodContainer
          imagen="https://i.pinimg.com/originals/f2/b9/38/f2b9385ad792f327da0973ca93c98bb3.jpg"
          titulo="TÍTULO"
          desc="Descripción del platillo que se muestra en la imagen"
        />
      </Col>
    ));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="justify-content-end">
            <div className="filter-button">
              <h1>FILTRAR</h1>
              <select>
                <option selected>PLATILLO FUERTE</option>
                <option>BEBIDAS</option>
                <option>ENTRADAS</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row>{this._renderFootChoice()}</Row>
      </Container>
    );
  }
}

export default withRouter(ShowFood);
