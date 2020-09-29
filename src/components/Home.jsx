import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import QrFooter from './home-components/QrFooter';
import ImageSlider from './home-components/ImageSlider';
import Plans from './home-components/Plans'
import MenuDescription from './home-components/MenuDescription'
import QrTest from './home-components/QrTest'
import SignUp from './home-components/SignUp'

class Home extends React.Component {


  render() {
    return (
      <div className="mt-5">
        <ImageSlider/>
        <br/>
        <MenuDescription/>
        <br/>
        <Plans/>
        <br/>
        <QrTest/>
        <br/>
        <SignUp/>
        <br/>
        <QrFooter/>
      </div>
    );
  }
}

export default withRouter(Home);