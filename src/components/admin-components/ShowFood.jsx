import React from "react";
import ApiService from '../../services/ApiService';
import Cookies from '../../services/CookiesService'

import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/ShowFood.css";
import FoodContainer from "../menu-components/foodContainer";

class ShowFood extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Cookies.get('login-record-set').id,
      dishes: [],
    };
  }

  async componentDidMount() {

    this.getAllDishes()
  }

  async getAllDishes() {
    var response = await ApiService.getById(this.state.id, 'menus')
    response = response.data;

    if (response) {
      this.setState({
        ...this.state,
        dishes: response.dishes
      })

    }
  }


  renderDishes() {

    return this.state.dishes.map(element => (
      <Col sm="6" md="4" lg="3">
        <FoodContainer
          imagen={element.img}
          titulo={element.name}
          desc={element.description}
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
        <Row>{this.renderDishes()}</Row>
      </Container>
    );
  }
}

export default withRouter(ShowFood);
