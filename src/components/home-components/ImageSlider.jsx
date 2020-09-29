import React from "react";
import { withRouter } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "../../css/styleSlider.css";
//styleSlider
import "../../css/navbar.css";

class ImageSlider extends React.Component {
  render() {
    return (
      <div className="sliderNavbar">
        <AwesomeSlider>
          <div data-src="https://img.culturacolectiva.com/cdn-cgi/image/f=auto,w=1600,q=80,fit=contain/content_image/2019/5/30/1559224588318-el-triste-jose-jose-historia.jpg" />
          <div data-src="https://cnnespanol.cnn.com/wp-content/uploads/2019/09/jose-jose-romulo-sosa-prinicpe-cancion-murio.jpg?quality=100&strip=info" />
          <div data-src="https://imagenes.milenio.com/-Us-fVHSBLtRnA5KLRP4-RVxX4s=/958x596/https://www.milenio.com/uploads/media/2019/09/28/jose-jose-cuartoscuro-1_0_28_800_497.jpg" />
          {/* <div data-src="https://imagenes.milenio.com/-Us-fVHSBLtRnA5KLRP4-RVxX4s=/958x596/https://www.milenio.com/uploads/media/2019/09/28/jose-jose-cuartoscuro-1_0_28_800_497.jpg" /> */}
        </AwesomeSlider>
      </div>
    );
  }
}

export default withRouter(ImageSlider);
