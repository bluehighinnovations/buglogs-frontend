import React, { Component } from "react";
import "./results-page.scss";

class ResultsPage extends Component {
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
        </div> */}
            </div>
          </div>
        </div>

        <div className="container-fluid" id="result-section">
          <div className="row">
            <div className="col-md-4">
              <div id="filter-wrapper">
                <p>Filter By Tags</p>
                <input type="text" placeholder="Search Text" />
                <div id="selected-tags-wrapper">
                  <div className="selected-tag">
                    <span>#angular</span>{" "}
                    <span className="remover">
                      {" "}
                      <i className="fas fa-times"></i>{" "}
                    </span>
                  </div>
                  <div className="selected-tag">
                    <span>#angular</span>{" "}
                    <span className="remover">
                      {" "}
                      <i className="fas fa-times"></i>{" "}
                    </span>
                  </div>
                  <div className="selected-tag">
                    <span>#angular</span>{" "}
                    <span className="remover">
                      {" "}
                      <i className="fas fa-times"></i>{" "}
                    </span>
                  </div>
                  <div className="tag">
                    <span>#angular</span>
                  </div>
                  <div className="tag">
                    <span>#angular</span>
                  </div>
                  <div className="tag">
                    <span>#angular</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 expand-width-in-medium">
              <div className="row">
                <div className="col-6">
                  <p id="result-summary">53 results found</p>
                </div>
                <div className="col-6"></div>
                <div className="col-12">
                  <div className="result-wrapper" onClick={() => this._navigateTo('/log')}>
                    <div className="col-12 log-stats-wrapper hide-on-medium">
                      <div className="log-stats">
                        <span className="log-stars">
                          <i className="fas fa-star"></i> &nbsp;3
                        </span>
                        <span className="log-views">
                          13 views since 12-12-2018
                        </span>
                      </div>
                    </div>
                    <p className="log-title">
                      Log Demo Title Log Demo Title Log Demo Title Log Demo
                      Title Log Demo Title Log Demo Title
                    </p>
                    <p className="log-desc">
                      Log Demo Title Log Demo Title Log Demo Title Log Demo
                      Title Log Demo Title Log Demo Title Log Demo Title Log
                      Demo Title Log Demo Title Log Demo Title Log Demo Title
                      Log Demo Title Log Demo Title Log Demo Title Log Demo
                      Title Log Demo Title Log Demo Title Log Demo Title
                    </p>
                    <div className="col-12 author-data">
                      <span>by John</span>
                      <div className="author-initial">J</div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="result-wrapper" onClick={() => this._navigateTo('/log')}>
                    <div className="col-12 log-stats-wrapper hide-on-medium">
                      <div className="log-stats">
                        <span className="log-stars">
                          <i className="fas fa-star"></i> &nbsp;3
                        </span>
                        <span className="log-views">
                          13 views since 12-12-2018
                        </span>
                      </div>
                    </div>
                    <p className="log-title">
                      Log Demo Title Log Demo Title Log Demo Title Log Demo
                      Title Log Demo Title Log Demo Title
                    </p>
                    <p className="log-desc">
                      Log Demo Title Log Demo Title Log Demo Title Log Demo
                      Title Log Demo Title Log Demo Title Log Demo Title Log
                      Demo Title Log Demo Title Log Demo Title Log Demo Title
                      Log Demo Title Log Demo Title Log Demo Title Log Demo
                      Title Log Demo Title Log Demo Title Log Demo Title
                    </p>
                    <div className="col-12 author-data">
                      <span>by John</span>
                      <div className="author-initial">J</div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="result-wrapper" onClick={() => this._navigateTo('/log')}>
                    <div className="col-12 log-stats-wrapper hide-on-medium">
                      <div className="log-stats">
                        <span className="log-stars">
                          <i className="fas fa-star"></i> &nbsp;3
                        </span>
                        <span className="log-views">
                          13 views since 12-12-2018
                        </span>
                      </div>
                    </div>
                    <p className="log-title">
                      Log Demo Title Log Demo Title Log Demo Title Log Demo
                      Title Log Demo Title Log Demo Title
                    </p>
                    <p className="log-desc">
                      Log Demo Title Log Demo Title Log Demo Title Log Demo
                      Title Log Demo Title Log Demo Title Log Demo Title Log
                      Demo Title Log Demo Title Log Demo Title Log Demo Title
                      Log Demo Title Log Demo Title Log Demo Title Log Demo
                      Title Log Demo Title Log Demo Title Log Demo Title
                    </p>
                    <div className="col-12 author-data">
                      <span>by John</span>
                      <div className="author-initial">J</div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="result-wrapper" onClick={() => this._navigateTo('/log')}>
                    <div className="col-12 log-stats-wrapper hide-on-medium">
                      <div className="log-stats">
                        <span className="log-stars">
                          <i className="fas fa-star"></i> &nbsp;3
                        </span>
                        <span className="log-views">
                          13 views since 12-12-2018
                        </span>
                      </div>
                    </div>
                    <p className="log-title">
                      Log Demo Title Log Demo Title Log Demo Title Log Demo
                      Title Log Demo Title Log Demo Title
                    </p>
                    <p className="log-desc">
                      Log Demo Title Log Demo Title Log Demo Title Log Demo
                      Title Log Demo Title Log Demo Title Log Demo Title Log
                      Demo Title Log Demo Title Log Demo Title Log Demo Title
                      Log Demo Title Log Demo Title Log Demo Title Log Demo
                      Title Log Demo Title Log Demo Title Log Demo Title
                    </p>
                    <div className="col-12 author-data">
                      <span>by John</span>
                      <div className="author-initial">J</div>
                    </div>
                  </div>
                </div>
                <div className="col-12"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ResultsPage;
