import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import S from './formStyles.js';
import PropTypes from 'prop-types';
import { setToken } from './actions/UserActions.js';
import Button from './bridge-components/Button.jsx';

const Register = ({ setTokenAction, history }) => {
  // React Hooks declaration
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    const registerUrl = `${API_URL}/users/register/`;
    const postData = new FormData();
    postData.append('first_name', firstName);
    postData.append('last_name', lastName);
    postData.append('date_of_birth', dateOfBirth);
    postData.append('email', email);
    postData.append('password', password);
    axios({
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        }, 
        url: registerUrl,
        method: 'POST',
        data: postData,
      })
    .then(({data}) => {
        const { token } = data;
        setTokenAction(token);
        history.push('/')
    })
    .catch((error) => {
        console.log(error);
    });
}
  return (
    <Fragment>
      <h1> Registration </h1>
        <S.ListElement>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </S.ListElement>
        <S.ListElement>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </S.ListElement>
          <S.ListElement>
          <label htmlFor="phone-number">Phone number</label>
          <input
            type="text"
            name="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </S.ListElement>
        <S.ListElement>
          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            type="date"
            name="date-of-birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </S.ListElement>
        <S.ListElement>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.ListElement>
        <S.ListElement>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.ListElement>
        <Button  onClick={ () => createUser()} text="Register" />
    </Fragment>
  );
};

Register.propTypes = {
  setTokenAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setTokenAction: token => dispatch(setToken(token)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Register);
