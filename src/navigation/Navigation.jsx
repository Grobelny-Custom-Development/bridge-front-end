import React from "react";
import LoggedInNav from "./LoggedInNav.jsx";
import LoggedOutNav from "./LoggedOutNav.jsx";
import S from "./navStyles.js";


const Navigation = ({ isLoggedIn, setToken }) => {
    return(
        <S.Nav>
            { !isLoggedIn &&
                <LoggedOutNav />
            }
            { isLoggedIn &&
                <LoggedInNav setToken={setToken} />
            }
        </S.Nav>
    )
}

export default Navigation;