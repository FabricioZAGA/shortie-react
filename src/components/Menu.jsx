import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/menu.css";
import Tacos from "../img/tacos.jpg";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      restaurantName: props.match.params.id,
    };
  }

  async componentDidMount() {
    document.title = this.state.restaurantName;
    this.setState({
      food: [
        {
          name: "TÍTULO",
          img: "https://picsum.photos/500/500",
          description: "Descripción del platillo que se muestra en la imagen",
          price: 50,
        },
        {
          name: "TÍTULO",
          img: "https://picsum.photos/500/500",
          description: "Descripción del platillo que se muestra en la imagen",
          price: 50,
        },
        {
          name: "TÍTULO",
          img: "https://picsum.photos/500/500",
          description: "Descripción del platillo que se muestra en la imagen",
          price: 50,
        },
        {
          name: "TÍTULO",
          img: "https://picsum.photos/500/500",
          description: "Descripción del platillo que se muestra en la imagen",
          price: 50,
        },
      ],
    });
  }

  _renderFootChoice() {
    return this.state.food.map((f) => (
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
  render() {
    return (
      <div className="mt-3">
        <div
          className="div-menu-img"
          style={{ backgroundImage: "url(https://picsum.photos/500/200)" }}
        >
          <div className="logo-circle">
            <img src={Tacos} alt="" />
          </div>
        </div>
        <div className="logo-space"></div>
        <div className="opciones-button">
          <button>POPULAR</button>
          <button>BEBIDAS</button>
          <button>ENTRADAS</button>
          <button>PLATILLOS</button>
        </div>
        <Container>
          <Row>{this._renderFootChoice()}</Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Menu);
