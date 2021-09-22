import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Contact from "./Component/Contact/Contact";

function App() {
  useEffect(() => {
    document.title = "Developer";
  }, []);

  return (
    <Router>
      <Contact />
    </Router>
  );
}

export default App;
