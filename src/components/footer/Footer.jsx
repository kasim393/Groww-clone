import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer ">
      <div className="web-align">
        <div className="footer-top">
          <div className="footer-list">
            <div className="footer-list-left">
              <img
                src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/logo-light-groww.1815ad63.svg"
                alt=""
                className="footer-logo"
              />
              <p class="address">4th Rock</p>
              <p class="address">S.T Bed, From the Sun</p>
              <p class="address">The Interwebs – 311</p>
              <p class="underline">Contact Us</p>
              <div className="social">
                <img
                  src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/fb_icon_groww.1c94e937.svg"
                  alt=""
                />
                <img
                  src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/twitter_icon_groww.4cb988f6.svg"
                  alt=""
                />
                <img
                  src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/yt_icon_groww.ec96b677.svg"
                  alt=""
                />
                <img
                  src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/instagram_icon_groww.0454c1a2.svg"
                  alt=""
                />
                <img
                  src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/linkedin_icon_groww.b15f8240.svg"
                  alt=""
                />
                <img
                  src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/telegram_icon_groww.f6524497.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="footer-list-right">
              <div className="footer-col-3">
                <div className="col-head">WORKLOADS</div>
                <p>Container</p>
                <p>AI</p>
                <p>Render</p>
                <p>Transcode</p>
                <p>Live Stream</p>
              </div>
              <div className="footer-col-3">
                <div className="col-head">GPUx</div>
                <p>About Us</p>
                <p>Current Round</p>
                <p>Blog</p>
                <p>Media & Press</p>
                <p>Help and Support</p>
              </div>
              <div className="footer-col-3">
                <div className="col-head">QUICK LINKS</div>
                <p>App</p>
                <p>Video Inspector</p>
                <p>Become a Farmer</p>
                <p>Documentation</p>
                <p>GPUx Academy</p>
                <p>Sitemap</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <div className="footer-company">
            ⓒ&nbsp; 2022 GPUx. All rights reserved, Built with{" "}
            <span class="heart">♥</span>
          </div>
          <div className="footer-store">
            <img
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/app-store-logo.060773ea.svg"
              alt=""
            />
            <img
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/google-play-badge.0547a72f.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
