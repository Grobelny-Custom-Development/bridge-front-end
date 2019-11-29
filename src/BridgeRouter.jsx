import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Navigation from './Navigation.jsx';
import App from './App.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Profile from './Profile.jsx';

import MeetingRouter from './meeting/MeetingRouter.jsx';


class BridgeRouter extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: localStorage.getItem('token')? true : false,
      }
    }
    componentDidUpdate({prevState}){
      console.log('in component didUpdate')
      const { isPrevLoggedIn } = prevState;
      const isLoggedInCurrent = localStorage.getItem('token');

      if((isLoggedInCurrent && !isPrevLoggedIn) || isLoggedInCurrent !== isPrevLoggedIn){
        this.setState({ isLoggedIn: isLoggedInCurrent});
      }
    }
    render(){
        const { isLoggedIn } = this.state;
        return(
        <Router>
            <Navigation isLoggedIn={isLoggedIn} />
            <Route path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/meeting" component={MeetingRouter} />
        </Router>
        )
    }
}

export default BridgeRouter;