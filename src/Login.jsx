

import React, { useState, Fragment } from "react";
import axios from 'axios';
import { css, jsx } from '@emotion/core';
import S from './styles.jsx'
// import PropTypes from 'prop-types';




const Login = ({setToken}) => {
    // React Hooks declaration
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();
        axios({
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
            },
            url: 'http://localhost:8000/users/token-auth/',
            method: 'POST',
            data: { email, password },
          })
        .then(({data}) => {
            const { token } = data;
            localStorage.setItem('token', token);
            setToken(token);
        })
        .catch((error) => {
            console.log(error)
        });
    }
    return(
        <S.Form>
        <h1> Login View</h1>
        <form onSubmit={handleLogin}>
            <S.UlElement>
                <S.ListElement>
                <label htmlFor="email">Email</label>
                <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
                </S.ListElement>
                <S.ListElement>
                <label htmlFor="password">Password</label>
                <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                </S.ListElement>
                <S.ListElement>
                <button type="submit"> Login </button>
                </S.ListElement>
            </S.UlElement>
        </form>
        </S.Form>
    )

}

export default Login;

// SignupForm.propTypes = {
//     handle_signup: PropTypes.func.isRequired
//   };