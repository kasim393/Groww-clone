import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar web-align">
      <div className="navbar-item">
        <img
          src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/logo-dark-groww.83f43714.svg"
          alt=""
        />
      </div>
      <div className="navbar-container">
        <div className="navbar-item">
          <div className="navbar-input-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              height="24"
              width="24"
              class="pos-rel se27SeIcon se27SeSearch"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <input
              type="text"
              className="navbar-search"
              placeholder="What are you looking for today?"
            />
          </div>
          <div>
            <button>Login/Register</button>
          </div>
        </div>
      </div>

      <div className="navbar-mobile-menu">
        <div className="search-mobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="24"
            width="24"
            class="pos-rel se27SeIcon se27SeSearch"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </div>
        <div className="menu-icon" onClick={() => setToggleMenu(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="27"
            width="27"
            class="rsl1IconClass"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </div>
        {toggleMenu && (
          <div className="mobile-menu-container">
            <div className="mobile-menu">
              <img
                onClick={() => setToggleMenu(false)}
                className="close-menu"
                src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
              />
              <div className="mobile-menu-top">
                <div>
                  <img
                    src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/build/client/images/simple-investing.3475e2d1.svg"
                    alt=""
                  />
                </div>
                <div className="mobile-login-div">
                  <p>Simple & Free Investing</p>
                  <button>Login/Register</button>
                </div>
              </div>
              <div className="mobile-menu-bottom">
                <div className="mobile-menu-item">
                  <p>Filter Stocks</p>
                  <p>Filter Mutual Funds</p>
                  <p>Filter US Stocks</p>
                </div>
                <div className="mobile-divider"></div>
                <div className="mobile-menu-item">
                  <p>Smart Save</p>
                  <p>Compare Funds</p>
                </div>
                <div className="mobile-divider"></div>
                <div className="mobile-menu-item">
                  <p>View in App</p>
                  <p>Help and Support</p>
                </div>
                <div className="mobile-divider"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
