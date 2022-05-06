import React from "react";
import "./showcase.css";
import server2 from "../../assets/server2.svg";
import cpu from "../../assets/cpu.svg";
import { BsArrowRight } from "react-icons/bs";

const Showcase = () => {
  return (
    <div className="showcase web-align">
      <div className="showcase-row">
        <div className="showcase-top">
          <div className="showcase-top_left">
            <div class="MainText">Connect your GPUs</div>
            <div class="MainText">and earn</div>
            <div class="Para">
              As long as you have Windows (/w WSL2) or Linux you can farm out
              your hardware.
            </div>
            <div class="BotWrapper">
              <div class="valign-wrapper">
                <div>
                  <img
                    class="BotImg"
                    src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/dash.a7e0c55c.svg"
                    width="48"
                    height="48"
                    alt="img"
                  />
                </div>
                <div>
                  <div class="botwrapper-head">Track your cluster</div>
                  <div class="botwrapper-para">
                    Keep track of your profits and utilization.
                  </div>
                </div>
              </div>
              <div class="valign-wrapper" style={{ marginTop: "40px" }}>
                <div>
                  <img
                    class="BotImg"
                    src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/sync.3ac006aa.svg"
                    width="48"
                    height="48"
                    alt="img"
                  />
                </div>
                <div>
                  <div class="botwrapper-head">Always in Sync</div>
                  <div class="botwrapper-para">
                    GPUx will take care of providing your hardware work so you
                    focus on infrastructure.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-top_right">
            <div className="top-right_two">
              <div className="showcase_server">
                <img src={server2} alt="" />
                <div>
                  <p>WSL2</p>
                  <BsArrowRight />
                </div>
              </div>
              {/* <div
                style={{ marginTop: "30px", backgroundColor: "#66e3c4" }}
                className="showcase_server"
              >
                <img src={cpu} alt="" />
                <div>
                  <p>Linux</p>
                  <BsArrowRight />
                </div>
              </div> */}
            </div>
            <div className="top-right_one">
              <div
                style={{ backgroundColor: "#66e3c4" }}
                className="showcase_server"
              >
                <img src={cpu} alt="" />
                <div>
                  <p>Linux</p>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="showcase-bottom"></div>
      </div>
      <div className="showcase-banner">
        <div className="banner-left">
          <div class="heading">We’re with you, at every step.</div>
          <div class="para">
            For any query you have, find the answer quickly on our Help &amp;
            Support. Need a little more help? We’re happy to talk in person or
            via chat.
          </div>
          <div>
            <button>
              <p href="https://discord.com/invite/jjBSjSF" target="_blank">
                Get In Touch
              </p>
            </button>
          </div>
        </div>
        <div className="banner-right">
          <img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/hns-support-img.c56178f0.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
