import React from "react";
import ApiService from "../services/ApiService";

import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import { Link } from "react-scroll";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/menu.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "",
      restaurantName: props.match.params.id,
      categories: "",
      styleButtons: [],
      fixedMenu: ["", "visibility-hidden"],
    };
  }
  async componentDidMount() {
    document.title = this.state.restaurantName;

    console.log(this.state.restaurantName);

    var response = await ApiService.getById(this.state.restaurantName, "menus");

    var categories = await ApiService.getById(
      this.state.restaurantName,
      "menus/categories"
    );

    if (response && categories) {
      var array = [];
      for (let i = 0; i < categories.data.length; i++) {
        i === 0
          ? array.push("menu-category-active-btn")
          : array.push("menu-category-btn");
      }

      this.setState({
        ...this.state,
        menu: response.data,
        categories: categories.data,
        styleButtons: array,
      });

      this.orderCategoriesDishes();
    }
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll(event) {
    var top = event.target.scrollingElement.scrollTop;
    if (top > 255) {
      this.setState({
        ...this.state,
        fixedMenu: ["div-fixed-menu", "visibility-visible"],
      });
    } else {
      this.setState({
        ...this.state,
        fixedMenu: ["", "visibility-hidden"],
      });
    }
  }

  _changeButtonStyle(index) {
    var array = [];
    for (let i = 0; i < this.state.styleButtons.length; i++) {
      i === index
        ? array.push("menu-category-active-btn")
        : array.push("menu-category-btn");
    }
    this.setState({
      ...this.state,
      styleButtons: array,
    });
  }

  renderCategories() {
    if (this.state.categories) {
      return this.state.categories.map((f, index) => (
        <Link
          onClick={this._changeButtonStyle.bind(this, index)}
          className={this.state.styleButtons[index]}
          key={index}
          to={`row${index}`}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {f}
        </Link>
      ));
    }

    return;
  }

  renderLoadedDishes(dishes) {
    return dishes.map((f) => (
      <Col xs="12">
        <div className="food-container">
          <div className="food-texto">
            <h1>{f.name}</h1>
            <h2>{f.description}</h2>
          </div>
          <div
            className="food-img"
            style={{ backgroundImage: `url(${f.img})` }}
          ></div>
          <div className="food-button">${f.price}</div>
        </div>
      </Col>
    ));
  }

  renderWaypoints() {
    if (this.state.menu.dishes) {
      var dishes = this.orderCategoriesDishes();
      return dishes.map((d, index) => (
        <Waypoint
          onEnter={this._changeButtonStyle.bind(this, index)}
          onLeave={this._changeButtonStyle.bind(this, index - 1)}
        >
          <Row id={`row${index}`}>{this.renderLoadedDishes(d)}</Row>
        </Waypoint>
      ));
    }

    return;
  }

  orderCategoriesDishes() {
    if (this.state.categories) {
      var array = [];
      this.state.categories.map((c, index) => {
        var secondArray = [];
        this.state.menu.dishes.map((m) => {
          if (c.includes(m.category)) {
            secondArray.push(m);
          }
        });
        array.push(secondArray);
      });
      return array;
    }
    return;
  }

  render() {
    return (
      <div>
        <div className="div-fixed-menu"></div>
        <div
          className="div-menu-img"
          style={{ backgroundImage: `url(${this.state.menu.bannerImg})` }}
        >
          <div className="logo-circle">
            <div
              style={{ backgroundImage: `url(${this.state.menu.logoImg})` }}
            ></div>
          </div>
        </div>
        <div className="logo-space"></div>

        <div className={`opciones-button ${this.state.fixedMenu[0]}`}>
          {this.renderCategories()}
        </div>
        <div className={`div-invisible ${this.state.fixedMenu[1]}`}></div>
        <Container>{this.renderWaypoints()}</Container>
      </div>
    );
  }
}

export default withRouter(Menu);
