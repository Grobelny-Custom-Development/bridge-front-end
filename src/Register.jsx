import React, { useState, Fragment } from 'react';
import axios from 'axios';
import S from './formStyles.js';

const Register = () => {
  // React Hooks declaration
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = (event) => {
    console.log('create meeting');
    console.log('auth token');
    event.preventDefault();
    axios({
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        url: 'http://localhost:8000/users/register/',
        method: 'POST',
        data: { 
            first_name: firstName, 
            last_name: lastName, 
            date_of_birth: dateOfBirth, 
            email,
            password
        },
      })
    .then(({data}) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
}

  return (
    <Fragment>
      <h1> Registration </h1>
      <form onSubmit={createUser}>
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
        <S.ListElement>
          <button type="submit"> Register </button>
        </S.ListElement>
      </form>
    </Fragment>
  );
};

export default Register;
