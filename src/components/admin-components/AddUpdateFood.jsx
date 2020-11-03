import React from "react";
import ApiService from '../../services/ApiService'
import Cookies from '../../services/CookiesService'

import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/ShowFood.css";
import InsertForm from "../menu-components/insertForm";
import FoodContainer from "../menu-components/foodContainer";



class AddUpdateFood extends React.Component {
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
    var array = [];

    debugger
    this.state.dishes.reverse().map((element, i) => {
      if (i < 3) {
        array.push(element);
      }
    });

    const indexes = [this.state.dishes.length - 1, this.state.dishes.length - 2, this.state.dishes.length - 3];
    return array.map((element, i) => (
      <FoodContainer
        imagen={element.img}
        titulo={element.name}
        desc={element.description}
        index={indexes[i]}
      />
    ));
  }


  render() {
    return (
      <Container>
        <Row>
          <Col md="8">
            <InsertForm />
          </Col>
          <Col md="4" className="d-md-block d-none" >
            {this.renderDishes()}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(AddUpdateFood);
