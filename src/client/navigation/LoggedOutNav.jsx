import React, { Fragment } from "react";
import {
    Link,
  } from "react-router-dom";
import S from "./navStyles.js";


const LoggedOutNav = () => (
  <S.Ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
    </S.Ul>
);


export default LoggedOutNav;
