import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

import Page from "../Page/Page";

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
          <Route path="/" component={Page}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
