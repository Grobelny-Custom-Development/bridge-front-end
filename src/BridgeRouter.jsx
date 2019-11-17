import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import App from './App.jsx';
import Login from './Login.jsx'


class BridgeRouter extends Component {

    render(){
      console.log('bridgeRouter')
        return(
        <Router>
          <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
            <Route path="/" >
              <App />
            </Route>
            <Route path="/login" >
              <Login />
            </Route>
            <Route path="/register" >
              <App />
            </Route>
        </Router>
        )
    }

}

export default BridgeRouter;