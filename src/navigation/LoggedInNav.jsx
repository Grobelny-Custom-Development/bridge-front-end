import React from "react";
import {
    Link
  } from "react-router-dom";
import PropTypes from 'prop-types';
import S from "./navStyles.js";


const LoggedInNav = ({ setToken }) => {
    const logout = () => {
        setToken(null);
    }
    return(
        <S.Ul>
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
        </S.Ul>
    )
  
  }

export default LoggedInNav;

LoggedInNav.propTypes = {
    setToken: PropTypes.func.isRequired,
};
