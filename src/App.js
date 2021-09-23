import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import ContactPage from "./Component/ContactPage/ContactPage";

function App() {
  useEffect(() => {
    document.title = "Developer";
  }, []);

  return (
    <Router>
      <ContactPage />
    </Router>
  );
}

export default App;
