import React from "react";
import "./article.css";
const Article = () => {
  return (
    <div className="article_section web-align">
      <div className="heading">Meet our Team</div>
      <div className="card-container">
        <div className="card-wrapper">
          <img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/blog1.d3a78143.png"
            alt=""
          />
          <p>Annie - Marketing 
            <br/> Meet her in Krakow
            <br/><a href="https://www.linkedin.com/in/anna-polishchuk-b671401b7" target="_blank">LinkedIn</a>
          </p>
        </div>
        <div className="card-wrapper">
          <img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/blog2.2eea33cc.png"
            alt=""
          />
          <p>Ivan - Tech
            <br/> Meet him in Toronto
            <br/><a href="https://www.linkedin.com/in/ivan-svirid/" target="_blank">LinkedIn</a>
          </p>
        </div>
        <div className="card-wrapper">
          <img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/blog3.5bbd4db3.png"
            alt=""
          />
          <p>Henry - Operations
            <br/> Meet him in Hefei
            <br/><a href="https://www.linkedin.com/in/anna-polishchuk-b671401b7" target="_blank">WeChat</a>
          </p>
        </div>
      </div>
      <div className="view-article">
        <br/>
        <br/>
        <span>View all team</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="22"
          width="22"
          class="pos-rel vm44Arrow"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Article;
