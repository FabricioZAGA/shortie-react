import React from "react";
import ApiService from "../services/ApiService";

import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/menu.css";
import Tacos from "../img/tacos.jpg";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: '',
      restaurantName: props.match.params.id,
      categories: ''
    };
  }
  async componentDidMount() {
    document.title = this.state.restaurantName;

    console.log(this.state.restaurantName)

    var response = await ApiService.getById(this.state.restaurantName, 'menus')

    var categories = await ApiService.getById(this.state.restaurantName, 'menus/categories')

    if (response) {
      this.setState({
        ...this.state,
        menu: response.data,
        categories: categories.data
      })
    }

  }

  renderLoadedDishes() {

    if (this.state.menu.dishes) {
      return this.state.menu.dishes.map((f) => (
        <Col xs="12">
          <div className="food-container">
            <div className="food-texto">
              <h1>{f.name}</h1>
              <h2>{f.description}</h2>
            </div>
            <div className="food-img" style={{ backgroundImage: `url(${f.img})` }}></div>
            <div className="food-button">
              ${f.price}
            </div>
          </div>
        </Col>
      ));
    }
    else {
      return
    }
  }

  renderCategories() {
    if (this.state.categories) {
      return this.state.categories.map((f, index) => (
        <button key={index}>{f}</button>
      ))
    }

    return

  }


  render() {
    return (
      <div className="mt-3">
        <div
          className="div-menu-img"
          style={{ backgroundImage: `url(${this.state.menu.bannerImg})` }}
        >
          <div className="logo-circle">
            <div style={{ backgroundImage: `url(${this.state.menu.logoImg})` }}></div>
          </div>
        </div>
        <div className="logo-space"></div>
        <div className="opciones-button">
          {this.renderCategories()}
        </div>
        <Container>
          <Row>{this.renderLoadedDishes()}</Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Menu);
