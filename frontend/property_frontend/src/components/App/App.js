import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
