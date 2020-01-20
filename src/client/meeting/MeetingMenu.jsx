import React, { Component } from "react";
import {
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";



const MeetingMenu = () => {
      const { url } = useRouteMatch();
        return(
        <div>
            <p><Link to={url + "/create"}> Host a meeting </Link></p>
            <p><Link to={url + "/active"}> Your Meetings </Link></p>
            <p><Link to={url + "/template"}> Trending Templates </Link></p>
        </div>
        )
}

export default MeetingMenu;