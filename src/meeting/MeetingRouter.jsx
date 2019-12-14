import React, { Component } from "react";
import {
  Route,
  useRouteMatch,
} from "react-router-dom";

import MeetingCreate from './MeetingCreate.jsx';
import MeetingMenu from './MeetingMenu.jsx'


const MeetingRouter = (props) => {
      const { path, url} = useRouteMatch();
      const { match } = props;
      console.log(props)
      console.log(match.url)
        return(
        <div>
            <Route path={`${path}/create`} component={MeetingCreate} />
        </div>
        )
}

export default MeetingRouter;