import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from "react";
import { setToken } from './UserActions.js';

import BridgeWebAPI from './helpers/api.js';
import PageError from './helpers/PageError.jsx';

import Form from './forms/Form.jsx';
import Field from './forms/Field.jsx';
import FormButton from './forms/FormButton.jsx';

import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({

  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

const Login = (props) => {
    // React Hooks declaration
    const [pageError, setPageError] = useState(null);
    const handleLogin = ({email, password}) => {
        const loginUrl = `${API_URL}/users/token-auth/`;
        BridgeWebAPI.post(null, loginUrl, { email, password})
        .then(({data}) => {
            const { setTokenAction, history } = props;
            const { token } = data;
            setTokenAction(token);
            history.push('/');
        })
        .catch((error) => {
            // if(error.response){

            // }
            // else{
                setPageError(error.message);
            // }
        });
    }

  return(
    <div>
    <PageError text={pageError} />
    <h1>Sign In</h1>
        <Form 
            className='standard'
            initialValues={{
                  email: '',
                  password:''
                }} 
            validationSchema={SignInSchema}
            onSubmit={values => {
              handleLogin(values)
            }}>
          <Field type="email" name="email" placeholder="Email" label="Email" />
          <Field type="password" name="password" placeholder="Password" label="Password" />
          <FormButton type="submit" text="Sign In" />
        </Form>
  </div>

  )
};
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