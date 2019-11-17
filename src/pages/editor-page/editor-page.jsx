import React, { Component } from "react";
import "./editor-page.scss";

class EditorPage extends Component {
  state = {};
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
              {/* <button id="g-login-btn"><span><i className="fab fa-google"></i></span> Login</button>  */}
              <div id="header-user-info-wrapper">
                <div id="header-user-icon-circular">DS</div>
                <div id="header-acc-label">My Posts</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="log-editor-wrapper">
          <div className="row">
            <div className="col-md-8" id="new-log-label-wrapper">
              <h3>Create a new log</h3>
            </div>
            <div className="col-md-8 editor-formgroup">
              <p>Title</p>
              <input type="text" />
            </div>
            <div className="col-md-8 editor-formgroup">
              <p>Tags</p>
              <input type="text" />
            </div>
            <div className="col-md-8 editor-formgroup">
              <p>Problem Description</p>
              <textarea></textarea>
            </div>
            <div className="col-md-8 editor-formgroup">
              <p>Solution</p>
              <textarea></textarea>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="editor-bottom-actionbar">
          <div className="row">
            <div className="col-md-6" id="negative-action-wrapper">
              <button>
                <i className="fas fa-times"></i> &nbsp; Discard and Close
              </button>
            </div>
            <div className="col-md-6" id="positive-action-wrapper">
              <button id="save-as-draft-btn">
                Save as Draft &nbsp; <i className="fas fa-save"></i>
              </button>
              <button id="post-btn">
                Post &nbsp; <i className="fas fa-file-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditorPage;
