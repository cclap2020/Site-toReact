import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import ContactPage from "./Component/ContactPage/ContactPage";
import PortfolioPage from "./Component/PortfolioPage/PortfolioPage";
import HomePage from "./Component/HomePage/HomePage";

function App() {
  useEffect(() => {
    document.title = "Developer";
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
