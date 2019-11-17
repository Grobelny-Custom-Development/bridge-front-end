import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class BridgeRouter extends Component {


    render(){
        <Router>
            <Route path="/" >
                <App />
            </Route>
        </Router>
    }

}

export default BridgeRouter;