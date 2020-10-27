import React from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import QrFooter from "./home-components/QrFooter";
import ImageSlider from "./home-components/ImageSlider";
import Plans from "./home-components/Plans";
import MenuDescription from "./home-components/MenuDescription";
import QrTest from "./home-components/QrTest";
import SignUp from "./home-components/SignUp";

class Home extends React.Component {


  async componentDidMount() {
    document.title = `Shortie`;
  }

  render() {
    return (
      <div className="mt-3">
        <ImageSlider className="mb-5" />
        <br />
        <MenuDescription className="px-5" />
        <br />
        <Plans />
        <br />
        <QrTest />
        <br />
        <SignUp />
        <br />
        <QrFooter />
      </div>
    );
  }
}

export default withRouter(Home);
