import React from "react";
import "./article.css";
const Article = () => {
  return (
    <div className="article_section web-align">
      <div className="heading">Keep learning. Keep growing.</div>
      <div className="card-container">
        <div className="card-wrapper">
          <img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/blog1.d3a78143.png"
            alt=""
          />
          <p>How to Select/Pick Stocks for Intraday</p>
        </div>
        <div className="card-wrapper">
          <img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/blog2.2eea33cc.png"
            alt=""
          />
          <p>Beginners Guide to Mutual Funds</p>
        </div>
        <div className="card-wrapper">
          <img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/blog3.5bbd4db3.png"
            alt=""
          />
          <p>How to Diversify in the Time of Market Volatility</p>
        </div>
      </div>
      <div className="view-article">
        <span>View all articles</span>
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
