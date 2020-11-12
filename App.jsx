import React, { useContext } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Select from "./components/Select";
import Error from "./components/Error";
import Loginauth from "./components/Loginauth";
import Showproduct from "./components/Showproduct";
import Dataprovider from "./components/Dataprovider";
import Cart from "./components/Cart";
import { Datacontext } from "./components/Dataprovider";
import Profile from "./components/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Dataprovider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/select" component={Select} />
            <Route exact path="/loginauth" component={Loginauth} />
            <Route exact path="/showproduct/:id" component={Showproduct} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/profile" component={Profile} />
            {/* <Redirect to="/" /> */}
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </Dataprovider>
  );
}

export default App;
