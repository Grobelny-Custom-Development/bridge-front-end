import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import MeetingCreate from './MeetingCreate.jsx';


class MeetingRouter extends Component {
    render(){
        return(
        <div>
            <Route path="/create" component={MeetingCreate} />
        </div>
        )
    }
}

export default MeetingRouter;