import React from "react";
import "./trust.css";
const Trust = () => {
  return (
    <div className="trust_section">
      <div className="web-align">
        <div className="left-trust">
          <div class="TextWrapper">
            <div class="Heading">Trusted by</div>
            <div class="Heading">users</div>
            <div class="Para">
              Our cutting-edge reputation system ensures that your peers
              provide quality and secure service.
            </div>
          </div>
        </div>
        <div className="right-trust">
          <img
            className="desktop-img"
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/shield-groww.0d0cc15e.png"
            alt=""
          />
          <img
            className="mobile-img"
            src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/build/client/images/shield.d984cc0b.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Trust;
