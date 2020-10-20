//import QRCode from "qrcode.react";
import { QRCode } from "react-qrcode-logo";
import Cookies from "../../services/CookiesService"


import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../../css/qrPage.css";

class DownloadQr extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: Cookies.get('login-record-set').restaurantName,
      value: Cookies.get('id-menu'),
      link: `http://192.168.100.3:3000/menu/${Cookies.get('id-menu')}`,
    };
  }

  downloadQR() {
    const canvas = document.getElementById("react-qrcode-logo");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${this.state.name}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <h1 className="qr-generated-title">Generar Qr de tu menu</h1>
        </Row>

        <Row className="justify-content-center align-items-center">
          <Col className="d-flex justify-content-center align-items-center order-first order-md-last">
            <QRCode
              className="qr-page-container"
              value={this.state.link}
              size={300}
              ecLevel={"H"}
              includeMargin={true}
              logoImage={require("../../img/imagotipoNegroReducido.jpg")} // or logo={{uri: base64logo}}
              bgColor="#FFFFFF"
              fgColor="#000000"
              quietZone={20}
              logoWidth={76.5}
            />
          </Col>
          <Col className="d-flex justify-content-center align-items-center order-last order-md-first">
            <Row className="justify-content-center align-items-center">
              <Col
                xs={12}
                className="d-flex justify-content-center align-items-center"
              >
                <h6 className="qr-generated-subtitle">Tu Link del Menú: </h6>
              </Col>
              <Col
                xs={12}
                className="d-flex justify-content-center align-items-center mb-4"
              >
                <a
                  className="qr-generated-link"
                  href={this.state.link}
                  target="_blank"
                >
                  {" "}
                  {this.state.link}
                </a>
              </Col>
              <Col
                xs={12}
                className="d-flex justify-content-center align-items-center"
              >
                <button
                  className="qr-button-page"
                  onClick={(e) => this.downloadQR(e)}
                >
                  {" "}
                  Download QR{" "}
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(DownloadQr);
