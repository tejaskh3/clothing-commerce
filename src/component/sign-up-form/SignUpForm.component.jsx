import React, { useEffect, useState } from 'react';
import {
  createUserFromEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const defaultUser = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};
const SignUpForm = () => {
  const [userDetails, setUserDetails] = useState(defaultUser);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = userDetails;
    console.log(JSON.stringify(userDetails));
    if (password !== confirmPassword) {
      alert('password and confirm password should be same.');
      reutrn;
    }
    try {
      const { user } = await createUserFromEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      setUserDetails(defaultUser);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert(`${email} already in use.`);
      }
     else console.log('error while sign-up with email and password', error.message);
    }
  };
  return (
    <div>
      <h1>Sign Up with email and password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          id="name"
          name="displayName"
          value={userDetails.displayName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          id="email"
          placeholder="Enter Email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          id="password"
          placeholder="enter password"
          name="password"
          value={userDetails.password}
          onChange={handleChange}
        />

        <label htmlFor="confirm-password">Password</label>
        <input
          required
          type="password"
          placeholder="confirm password"
          id="confirm-passwrod"
          name="confirmPassword"
          value={userDetails.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
