import React from "react";
import { connect } from 'react-redux';
import {
    Link
  } from "react-router-dom";
import PropTypes from 'prop-types';
import { setToken } from '../UserActions.js';
import S from "./navStyles.js";


const LoggedInNav = ({ setTokenAction, history }) => {
    const logout = () => {
        setTokenAction(null);
        window.location.href="/login";
    }
    return(
        <S.Ul>
            <li>
                <Link to="/">Home</Link>
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

LoggedInNav.propTypes = {
    setTokenAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    setTokenAction: token => dispatch(setToken(token)),
  });

export default connect(
    null,
    mapDispatchToProps,
  )(LoggedInNav);