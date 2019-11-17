import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import FullPageLoader from "./containers/full-page-loader";
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from "react-toasts";
import "./assets/scss/bootstrap/bootstrap.min.css";
import LandingPage from './pages/landing-page/landing-page';
import ResultsPage from "./pages/results-page/results-page";
import LogViewerPage from './pages/log-viewer-page/log-viewer-page';
import EditorPage from "./pages/editor-page/editor-page";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div></div>} persistor={persistor}>
        <Router>
          <div>
            <FullPageLoader></FullPageLoader>
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_RIGHT} />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/results" component={ResultsPage} />
              <Route exact path="/log" component={LogViewerPage} />
              <Route exact path="/editor" component={EditorPage} />
              <Route exact path="*" render={() => <Redirect to="/" />} />
              {/* <ProtectedRoute exact path="*" component={HomePage} redirectRoute="/login" /> */} */}
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
