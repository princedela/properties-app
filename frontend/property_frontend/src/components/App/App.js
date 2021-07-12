import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <div>register page</div>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
