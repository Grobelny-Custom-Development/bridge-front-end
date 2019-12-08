import React from "react";
import {
    Link
  } from "react-router-dom";
import S from "./navStyles.js";

const LoggedInNav = () => {
    const logout = () => {
        localStorage.removeItem('token')
    }
    return(
        <S.NavLink>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/meeting">Meetings</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/" onClick={logout}> Logout</Link>
            </li>
        </S.NavLink>
    )

}

export default LoggedInNav;