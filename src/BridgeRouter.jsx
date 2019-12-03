import React, { Component, Fragment } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
} from "react-router-dom";

import { createMemoryHistory } from 'history';

import Navigation from './Navigation.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Profile from './Profile.jsx';

import MeetingRouter from './meeting/MeetingRouter.jsx';

class BridgeRouter extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
      }
    }
    componentDidMount(){
      this.setState({isLoggedIn: localStorage.getItem('token')? true : false})
    }
    componentDidUpdate(prevProps, prevState){
      const { isLoggedIn: isPrevLoggedIn } = prevState;
      const isLoggedInCurrent = localStorage.getItem('token');

      if((isLoggedInCurrent && !isPrevLoggedIn) || isLoggedInCurrent !== isPrevLoggedIn){
        this.setState({ isLoggedIn: isLoggedInCurrent});
      }
    }
    render(){
        const { isLoggedIn } = this.state;
        console.log(this.props)
        return(
          <div>
          {/* // <BrowserRouter> */}
              <Navigation isLoggedIn={isLoggedIn} />
              <Route path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/profile" component={Profile} />
              <Route path="/meeting" component={MeetingRouter} />
        {/* // </BrowserRouter> */}
        </div>
        )
    }
}

export default BridgeRouter;