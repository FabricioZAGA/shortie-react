import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import ApiService from '../../services/ApiService';
import Cookies from '../../services/CookiesService'
import "bootstrap/dist/css/bootstrap.min.css";

function DeleteModal(props) {
  const [state, setShow] = useState({ show: false });



  const handleClose = () => setShow({ show: false });
  const handleShow = () => setShow({ show: true });

  const handleDelete = async () => {
    console.log(props);
    var response = await ApiService.deleteByIndex(`menus/deleteDish/${Cookies.get("id-menu")}/${props.id}`);
    if (response) {
      handleClose()
      window.location.reload(false)
    }

  }



  return (
    <>

      <button className="icon-bin2 label-input-file red-color" onClick={handleShow}></button>


      <Modal
        show={state.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>¿Eliminar Platillo?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro que desea eliminar este platillo?
          <br />
          Esta acción no se podrá revertir.
        </Modal.Body>
        <Modal.Footer>
          <button className=" label-input-file " onClick={handleClose}>Cerrar</button>
          <button className=" label-input-file red-color" onClick={handleDelete}>¡Ya bórrate!</button>


        </Modal.Footer>
      </Modal>
    </>
  );
}

export default withRouter(DeleteModal);
