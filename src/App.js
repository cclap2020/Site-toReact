import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Nav from "./Component/Nav/Nav";

function App() {
  useEffect(() => {
    document.title = "Developer";
  }, []);

  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
