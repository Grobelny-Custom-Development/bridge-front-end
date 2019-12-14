import React from "react";
import LoggedInNav from "./LoggedInNav.jsx";
import LoggedOutNav from "./LoggedOutNav.jsx";
import S from "./navStyles.js";


const Navigation = ({ isLoggedIn, setToken }) => {
    return(
        <S.Nav>
            <React.StrictMode>
            { !isLoggedIn &&
                <LoggedOutNav />
            }
            { isLoggedIn &&
                <LoggedInNav setToken={setToken} />
            }
            </React.StrictMode>
        </S.Nav>
    )
}

export default Navigation;