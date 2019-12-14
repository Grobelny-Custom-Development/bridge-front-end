import React, { Component, Fragment } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
} from "react-router-dom";
import { Global, css, jsx } from '@emotion/core';
import Navigation from './navigation/Navigation.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Profile from './Profile.jsx';

import MeetingRouter from './meeting/MeetingRouter.jsx';
import MeetingMenu from './meeting/MeetingMenu.jsx';


const globalCSS = css`
body{
  font: normal 18px/1.5 "Fira Sans", "Helvetica Neue", sans-serif;
  background: #3AAFAB;
  color: #fff;
}
`;


const pageCss =  css`
width: 80%;
max-width: 1200px;
margin: 0 auto;
`;


class BridgeRouter extends Component {
  constructor(props) {
      super(props);
      this.state = {
        token: null,
      }
    }
    componentDidMount(){
      this.setState({token: localStorage.getItem('token')})
    }

    setToken = token => {
      localStorage.setItem('token', token);
      this.setState({token})
    }
    render(){
        const { token } = this.state;
        const isLoggedIn = (token) ? true : false;
        return(
          <Fragment>
          {/* // <BrowserRouter> */}
              <Global styles={globalCSS} />
              <Navigation isLoggedIn={isLoggedIn} setToken={this.setToken} />
              <div css={pageCss}>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={ () => <Login setToken={this.setToken} />} />
              <Route path="/register" component={Register} />
              <Route path="/profile" component={Profile} />
              <Route exact path="/meeting" component={MeetingMenu} />
              <Route path="/meeting/:category?" component={MeetingRouter} />
              </div>


        {/* // </BrowserRouter> */}
        </Fragment>
        )
    }
}

export default BridgeRouter;