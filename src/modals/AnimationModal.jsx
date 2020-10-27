import React from "react";
import { withRouter } from "react-router-dom";
import FlashingLogo from "../img/flashingLogo.svg";
import "../css/modals.css";

function AnimationModal() {
  return (
    <div className="animation-modal-div">
      <img src={FlashingLogo} height="200px" alt="" />
    </div>
  );
}

export default withRouter(AnimationModal);
