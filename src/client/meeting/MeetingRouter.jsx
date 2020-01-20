import React from "react";
import { renderRoutes } from "react-router-config";


const MeetingRouter = ({ route }) => {

        return(
        <div>
          {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
        </div>
        )
}

export default MeetingRouter;