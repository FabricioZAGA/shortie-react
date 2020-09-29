import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/ShowFood.css";
import InsertForm from "../menu-components/insertForm";
import FoodContainer from "../menu-components/foodContainer";

class AddUpdateFood extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="8">
            <InsertForm />
          </Col>
          <Col md="4" className="d-md-block d-none">
            <FoodContainer
              imagen="https://i.pinimg.com/originals/f2/b9/38/f2b9385ad792f327da0973ca93c98bb3.jpg"
              titulo="TÍTULO"
              desc="Descripción del platillo que se muestra en la imagen"
            />
            <FoodContainer
              imagen="https://i.pinimg.com/originals/f2/b9/38/f2b9385ad792f327da0973ca93c98bb3.jpg"
              titulo="TÍTULO"
              desc="Descripción del platillo que se muestra en la imagen"
            />
            <FoodContainer
              imagen="https://i.pinimg.com/originals/f2/b9/38/f2b9385ad792f327da0973ca93c98bb3.jpg"
              titulo="TÍTULO"
              desc="Descripción del platillo que se muestra en la imagen"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(AddUpdateFood);
