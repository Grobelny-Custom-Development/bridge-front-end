import React from "react";
import { connect } from 'react-redux';


import LoggedInNav from "./LoggedInNav.jsx";
import LoggedOutNav from "./LoggedOutNav.jsx";
import S from "./navStyles.js";


const Navigation = ({ token }) => {
    const isLoggedIn = (token)? true : false;
    return(
        <S.Nav>
            { !isLoggedIn &&
                <LoggedOutNav />
            }
            { isLoggedIn &&
                <LoggedInNav />
            }
        </S.Nav>
    )
}

const mapStateToProps = ({
  reducer: {
    user: {
      token,
    },
  }
  }) => ({
    token
  });

export default connect(
    mapStateToProps,
    null,
  )(Navigation);