// import logo from "./logo.svg";
import "./App.css";
import LandingPage1 from "./components/landingPage1";
import LandingPage2 from "./components/landingPage2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./components/dashboard";
// import LoginPage from "./components/loginpage";

// import eye from "./images/eye.png";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/login">
          <LandingPage1 />
        </Route>
        <Route path="/register">
          <LandingPage2 />
        </Route>
        <Route path="/">
          <LandingPage1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
