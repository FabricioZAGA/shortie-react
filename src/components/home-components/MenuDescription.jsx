import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  ListGroup,
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import '../../css/generalStyles.css'
class MenuDescription extends React.Component {

  render() {
    return (

      <div>

        <Container id="section1">
          <Row clasName="p-5 mt-5">
            <Col sm={7}>
              <h2 className="mb-5 menuTitle">Menú Virtual</h2>
              <br />
              <h4 className="menuDescription">Buscamos que nuestros clientes se adapten a la situación que se presenta hoy en día con un acercamiento a la tecnología en sus locales. </h4>
              <br />
              <h4 className="menuDescription">Con Shortie podrá tener tu menú digital GRATIS, únicamente completa tu registro e imprime el código QR.</h4>
              <br />
              <h4 className="menuDescription">Los usuarios gozan de una manera sencilla y simple de mostrar sus productos sin la necesidad de un menú físico. </h4>
              <br />
              <h4 className="menuDescription">Conoce Shortie, visita el apartado de registro y comprueba sus beneficios. </h4>
            </Col>
            <Col sm={5}>
              <img style={{ borderRadius: "3em" }} className="mt-5" src="https://picsum.photos/300/300" alt="descriptive image" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(MenuDescription);