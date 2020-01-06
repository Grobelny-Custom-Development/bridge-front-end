import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from "react";
import S from './formStyles.js'


const Login = ({ setToken }) => {
    // React Hooks declaration
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        const loginUrl = `${API_URL}/users/token-auth/`;
        const postData = new FormData();
        postData.append('email', email);
        postData.append('password', password);
        axios({
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
            },
            url: loginUrl,
            method: 'POST',
            data: postData,
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
        {/* <form onSubmit={ (e) =>{ e.preventDefault(); handleLogin(e);}}> */}
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
                <button onClick={ () => handleLogin()}> Login </button>
                </S.ListElement>
            </S.UlElement>
        {/* </form> */}
        </Fragment>
    )

}

export default Login;

Login.propTypes = {
    setToken: PropTypes.func
};