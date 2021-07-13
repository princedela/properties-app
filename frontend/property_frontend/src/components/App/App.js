import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Ads from "../Home/Ads";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Ads />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
