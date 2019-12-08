import React, { useState } from 'react';
import S from './styles.jsx';

const Register = () => {
  // React Hooks declaration
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {

  };

  return (
    <S.Form>
      <h1> Registration </h1>
      <form onSubmit={handleRegister}>
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
            value={dateOfBirth}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.ListElement>
        <S.ListElement>
          <button type="submit"> Register </button>
        </S.ListElement>
      </form>
    </S.Form>
  );
};

export default Register;
