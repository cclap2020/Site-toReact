import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import ContactPage from "./Component/ContactPage/ContactPage";
import PortfolioPage from "./Component/PortfolioPage/PortfolioPage";

function App() {
  useEffect(() => {
    document.title = "Developer";
  }, []);

  return (
    <Router>
      <PortfolioPage />
    </Router>
  );
}

export default App;
