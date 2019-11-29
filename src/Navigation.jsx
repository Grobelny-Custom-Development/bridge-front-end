import React, {Fragment} from "react";

import {
    Link
  } from "react-router-dom";


const Navigation = (props) => {
    const logout = () => {
        localStorage.removeItem('token')
    }
    const { isLoggedIn } = props
    return(
        <nav>
          <ul>
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