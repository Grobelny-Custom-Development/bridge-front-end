import React, { Component } from "react";
import {
  Route,
  useRouteMatch,
} from "react-router-dom";

import MeetingCreate from './create/MeetingCreate.jsx';
import MeetingActive from './MeetingActive.jsx'
import MeetingBrainstorm from './MeetingBrainstorm.jsx'


const MeetingRouter = ({match}) => {
      const { path } = useRouteMatch();
      const { params } = match;
      //params: {category: "active"}
        return(
        <div>
            <React.StrictMode>
              <Route path={`${path}/create`} component={MeetingCreate} />
              <Route path={`${path}/active`} component={MeetingActive} />
              <Route path={`${path}/activity/brainstorm/:meetingID`} component={MeetingBrainstorm} />
            </React.StrictMode>
        </div>
        )
}

export default MeetingRouter;