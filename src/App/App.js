import useScrollToTop from "lib/useScrollToTop";

import { Route, HashRouter as Router, Switch } from "react-router-dom";
import Home from "pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";

import "styles/Font.css";
import "styles/Input.css";
import "styles/Shared.css";
import "./App.scss";

import SEO from "components/Common/SEO";

import { Header } from "components/Header/Header";

function FullApp() {
  return (
    <>
      <div className="App">
        <div className="App-content">
          <Header
            tradePageVersion={2}
          />
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </div>
      </div>
    </>
  );
}

function App() {
  useScrollToTop();

  let app = <FullApp />;
  app = <Router>{app}</Router>;
  app = <SEO>{app}</SEO>;

  return app;
}

export default App;
