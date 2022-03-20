import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

import Page from "../Page/Page";

function App() {
  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register("/workers/updateServiceWorker.js")
      .then(function (registration) {
        registration.addEventListener("updatefound", function () {
          console.log("updfound");
          registration.installing?.addEventListener(
            "statechange",
            function (e) {
              console.log("e", e);
            }
          );
        });
        // }
      })
      .catch(function (err) {
        console.log("ServiceWorker registration failed: ", err);
      });
  }
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
