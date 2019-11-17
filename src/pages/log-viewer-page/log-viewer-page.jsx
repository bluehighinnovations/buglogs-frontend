import React, { Component } from "react";
import "./log-viewer-page.scss";

class LogViewerPage extends Component {
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
        </div>  */}
            </div>
            <div className="col-lg-6" id="header-search-wrapper">
              <input placeholder="Search Posts" />
              <button>Search</button>
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

        <div className="container-fluid" id="post-action-topbar">
          <div className="row">
            <div className="col-md-6" id="back-to-results">
              <button>
                <i className="fas fa-arrow-left"></i> &nbsp; &nbsp; Back To Results
              </button>
            </div>
            <div className="col-md-6" id="results-naviagtor">
              <p>Jump To</p>
              <button id="prev-btn">
                <i className="fas fa-chevron-left"></i> &nbsp; Previous Result
              </button>
              <button>
                Next Result &nbsp; <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12" id="post-stats-wrapper">
              <div id="post-stats">
                <div id="star-wrapper">
                  <i className="fas fa-star"></i>
                  &nbsp; 3 Stars
                </div>
                <div id="views-wrapper">
                  <i className="fas fa-eye"></i>
                  &nbsp; 12 Views
                </div>
              </div>
            </div>
            <div className="col-12" id="viewer-wrapper">
              <div className="row">
                <div className="col-md-8">
                  <h3>Sample Log Title</h3>
                </div>
                <div className="col-md-8" id="tags-wrapper">
                  <div className="tag">#angular</div>
                  <div className="tag">#react-native</div>
                  <div className="tag">#firebase</div>
                  <div className="tag">#react-redux-connect</div>
                </div>
                <div className="col-md-12" id="problem-desc-wrapper">
                  <h6>Problem Description</h6>
                  <div id="problem-desc"></div>
                </div>
                <div className="col-md-12" id="solution-wrapper">
                  <h6>Solution</h6>
                  <div id="solution"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LogViewerPage;
