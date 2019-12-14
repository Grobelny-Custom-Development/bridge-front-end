import React, { Component } from "react";
import {
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";



const MeetingMenu = () => {
      const { url } = useRouteMatch();
      console.log(url)
        return(
        <div>
            <p><Link to={url + "/create"}> Host a meeting </Link></p>
            <p><Link to={url + "/company"}> Company Meetings </Link></p>
            <p><Link to={url + "/public"}> Public Meetings </Link></p>
            <p><Link to={url + "/participant"}> Meetings I've participated in </Link></p>
            <p><Link to={url + "/hosted"}> Meetings I've hosted </Link></p>
        </div>
        )
}

export default MeetingMenu;