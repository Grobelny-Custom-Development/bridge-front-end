import React from "react";
import {
    Link
  } from "react-router-dom";
  import S from "./navStyles.js";


const LoggedOutNav = () => {
    <S.NavLink>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/register">Register</Link>
        </li>
    </S.NavLink>
}

export default LoggedOutNav;