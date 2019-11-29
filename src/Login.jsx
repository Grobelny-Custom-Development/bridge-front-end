

import React, { useState, Fragment } from "react";
import axios from 'axios';

const Login = () => {
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
            console.log(token)
            localStorage.setItem('token', token);
        })
        .catch((error) => {
            console.log(error)
        });
    }
    return(
        <Fragment>
        <h1> Login View</h1>
        <form onSubmit={handleLogin}>
            <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />
            <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit"> Login </button>
        </form>
        </Fragment>
    )

}

export default Login;