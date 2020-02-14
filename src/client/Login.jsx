import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from "react";
import { setToken } from './UserActions.js';
import S from './formStyles.js'

import BridgeWebAPI from './helpers/api.js';


const Login = (props) => {
    // React Hooks declaration
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        const loginUrl = `${API_URL}/users/token-auth/`;
        BridgeWebAPI.post({}, loginUrl, { email, password})
        .then(({data}) => {
            const { setTokenAction, history } = props;
            const { token } = data;
            setTokenAction(token);
            history.push('/');
        })
        .catch((error) => {
            console.log(error)
        });
    }
    return(
        <Fragment>
        <h1> Login </h1>
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
                <S.ButtonElement onClick={ () => handleLogin()}> Login </S.ButtonElement>
            </S.UlElement>
        </Fragment>
    )

}

Login.propTypes = {
    setToken: PropTypes.func
};

Login.defaultProps = {
    setToken: null
  };

  const mapDispatchToProps = dispatch => ({
    setTokenAction: token => dispatch(setToken(token)),
  });

export default connect(
    null,
    mapDispatchToProps,
  )(Login);