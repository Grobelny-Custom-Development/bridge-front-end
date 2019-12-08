import React, {Fragment} from "react";
import { css, jsx } from '@emotion/core';
import {
    Link
  } from "react-router-dom";

  const navCSS = css`
  width: 100%;
  padding-left: 30px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

  const navLinkCSS = css`
  display: flex;
  list-style: none;

  li a {
        display: inline-block;
        padding: 10px 15px;
        text-decoration: none;
        color: white;
  }

  `;

const Navigation = (props) => {
    const logout = () => {
        localStorage.removeItem('token')
    }
    const { isLoggedIn } = props
    return(
        <nav css={navCSS}>
          <ul css={navLinkCSS}>
            <li>
              <Link to="/">Home</Link>
            </li>
            { !isLoggedIn &&
            <Fragment>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            </Fragment>
            }
            { isLoggedIn &&
            <Fragment>
            <li>
                <Link to="/meeting">Meetings</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <p onClick={logout}> Logout</p>
            </li>
            </Fragment>
            }
          </ul>
        </nav>
    )
}

export default Navigation;