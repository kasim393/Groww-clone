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
              <p class="address">No.11, 2nd floor, 80 FT Road</p>
              <p class="address">4th Block, S.T Bed, Koramangala</p>
              <p class="address">Bengaluru – 560034</p>
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
                <div className="col-head">PRODUCTS</div>
                <p>Stocks</p>
                <p>Futures & Options</p>
                <p>Mutual Funds</p>
                <p>Fixed Deposit</p>
                <p>US Stocks</p>
              </div>
              <div className="footer-col-3">
                <div className="col-head">GROWW</div>
                <p>About Us</p>
                <p>Pricing</p>
                <p>Blog</p>
                <p>Media & Press</p>
                <p>Help and Support</p>
              </div>
              <div className="footer-col-3">
                <div className="col-head">QUICK LINKS</div>
                <p>AMC Mutual Funds</p>
                <p>Calculators</p>
                <p>Glossary</p>
                <p>Open Demat Account</p>
                <p>Groww Digest</p>
                <p>Groww Academy</p>
                <p>Sitemap</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <div className="footer-company">
            ⓒ&nbsp; 2022 Groww. All rights reserved, Built with{" "}
            <span class="heart">♥</span>in India
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
