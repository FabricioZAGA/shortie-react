import React from "react";
import { withRouter } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "../../css/styleSlider.css";
//styleSlider
import "../../css/navbar.css";

class ImageSlider extends React.Component {
  render() {
    return (
      <div className="sliderNavbarg">
        <AwesomeSlider>
          <div data-src="https://shortie-img.s3.us-east-2.amazonaws.com/background-image-8.jpg" />
          <div data-src="https://shortie-img.s3.us-east-2.amazonaws.com/background-image-3.jpg" />
          <div data-src="https://shortie-img.s3.us-east-2.amazonaws.com/background-image-7.jpg" />
          {/* <div data-src="https://imagenes.milenio.com/-Us-fVHSBLtRnA5KLRP4-RVxX4s=/958x596/https://www.milenio.com/uploads/media/2019/09/28/jose-jose-cuartoscuro-1_0_28_800_497.jpg" /> */}
        </AwesomeSlider>
      </div>
    );
  }
}

export default withRouter(ImageSlider);
