import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../css/qrFooter.css'
import qrImg from '../../img/qr.png'
import '../../css/icons.css'

class QrFooter extends React.Component {


  render() {
    return (
      <div className="qrfooter">
        <div className="qrfooter-container">
            <div className="qrfooter-titulo">
                FAQS
                <br/>
                CONTACTO
                <br/>
                PRIVACIDAD
                <br/>
                <div className="qrfooter-redes">
                    <span className="icon-facebook-with-circle"/>
                    <span className="icon-gmail"/>
                    <span className="icon-instagram"/>
                </div>
            </div>
            <div className>
                <img className="qrfooter-img" src={qrImg} />
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(QrFooter);