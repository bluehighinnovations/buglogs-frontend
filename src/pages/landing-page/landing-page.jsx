import React, { Component } from "react";
import "./landing-page.scss";
import { Link } from "react-router-dom";


class LandingPage extends Component {
  state = {};

  _navigateTo = route => {
    this.props.history.push(route);
  }

  render() {
    return (
      <>
        <div className="container-fluid" id="header-wrapper">
          <div className="row">
            <div className="col-4">
              <h3>Buglogs</h3>
            </div>
            <div className="col-8 text-right visible-on-small small-login-btn-wrapper">
              <button id="g-login-btn">
                <span>G</span> Login
              </button>
              {/* <div id="header-user-info-wrapper">
          <div id="header-user-icon-circular">DS</div>
          <div id="header-acc-label">My Posts</div>
        </div> */}
            </div>
            <div className="col-lg-6" id="header-search-wrapper">
              <input placeholder="Search Posts" />
              <button onClick={() => this._navigateTo('/results')}>Search</button>
              
            </div>
            <div className="col-lg-2 hide-on-small">
              <button id="g-login-btn">
                <span>
                  <i className="fab fa-google"></i>
                </span>{" "}
                Login
              </button>
              {/* <div id="header-user-info-wrapper">
          <div id="header-user-icon-circular">DS</div>
          <div id="header-acc-label">My Posts</div>
        </div>  */}
            </div>
          </div>
        </div>

        <div className="container-fluid" id="landing-wrapper">
          <div className="row">
            <div className="col-md-6">
              <p id="landing-txt-one">
                Don’t invest time <br />
                on the same issue again!
              </p>
              <p id="landing-txt-two">
                Start logging them down <br />
                using buglogs
              </p>
              <div id="landing-get-started-button-wrapper">
                <button>
                  <span>Get started for free </span>
                  <span>
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
