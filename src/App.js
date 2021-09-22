import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <Router>
      <Footer />
    </Router>
  );
}

export default App;
