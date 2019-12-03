import React, { Component } from "react";
import {
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";

import MeetingCreate from './MeetingCreate.jsx';


const MeetingRouter = (props) => {
      const { path, url} = useRouteMatch();
        return(
        <div>
            <Link to={url + "/create"}> Create </Link>
            <Route path={`${path}/:topicId`} component={MeetingCreate} />
        </div>
        )
}

export default MeetingRouter;