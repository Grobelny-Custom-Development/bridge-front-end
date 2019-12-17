import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from "react";
import S from './formStyles.js'


const Login = ({ setToken }) => {
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
            setToken(token);
            window.location.href = "/";
        })
        .catch((error) => {
            console.log(error)
        });
    }
    return(
        <Fragment>
        <h1> Login </h1>
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
                type="password"
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
        </Fragment>
    )

}

export default Login;

Login.propTypes = {
    setToken: PropTypes.func
};