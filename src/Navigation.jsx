import React from "react";
import LoggedInNav from "./LoggedInNav.jsx";
import LoggedOutNav from "./LoggedInNav.jsx";
import S from "./navStyles.js";


const Navigation = ({ isLoggedIn }) => {
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

export default Navigation;