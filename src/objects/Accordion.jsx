import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/generalStyles.css";
import { Accordion, Card } from "react-bootstrap";

function AccordionComponent(props) {
  const [state, setShow] = useState({ show: false });

  const handleClose = () => setShow({ show: false });
  const handleShow = () => setShow({ show: true });

  const handleDelete = async () => {};

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card className="accordeon-card-class">
          <Accordion.Toggle className="accordeon-toggle-class" as={Card.Header} eventKey="0">
            Objetivo
          </Accordion.Toggle>
          <Accordion.Collapse className="accordeon-collapse-class" eventKey="0">
            <Card.Body>
              Buscamos que nuestros clientes se adapten a la situación que se
              presenta hoy en día con un acercamiento a la tecnología en sus
              locales.{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="accordeon-card-class">
          <Accordion.Toggle className="accordeon-toggle-class" as={Card.Header} eventKey="1">
            Menú GRATIS
          </Accordion.Toggle>
          <Accordion.Collapse className="accordeon-collapse-class" eventKey="1">
            <Card.Body>
              Con Shortie podrá tener tu menú digital GRATIS, únicamente
              completa tu registro e imprime el código QR.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="accordeon-card-class">
          <Accordion.Toggle className="accordeon-toggle-class" as={Card.Header} eventKey="2">
            Simple
          </Accordion.Toggle>
          <Accordion.Collapse className="accordeon-collapse-class" eventKey="2">
            <Card.Body>
              Los usuarios gozan de una manera sencilla y simple de mostrar sus
              productos sin la necesidad de un menú físico.{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="accordeon-card-class">
          <Accordion.Toggle className="accordeon-toggle-class" as={Card.Header} eventKey="3">
            Registrate
          </Accordion.Toggle>
          <Accordion.Collapse className="accordeon-collapse-class" eventKey="3">
            <Card.Body>
              Conoce Shortie, visita el apartado de registro y comprueba sus
              beneficios.{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default withRouter(AccordionComponent);
