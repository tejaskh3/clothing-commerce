import './SignUpForm.styles.scss';
import React, { useEffect, useState } from 'react';
import {
  createUserFromEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/FormInput.component';
import Button from '../button/Button.component';

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
    console.log(userDetails);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = userDetails;
    if (password !== confirmPassword) {
      alert('password and confirm password should be same.');
      reuturn;
    }
    try {
      const { user } = await createUserFromEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      setUserDetails(defaultUser);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert(`${email} already in use.`);
      } else
        console.log(
          'error while sign-up with email and password',
          error.message
        );
    }
  };
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account</h2>
      <span>Sign Up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Name'}
          inputOptions={{
            name: 'displayName',
            required: true,
            value: userDetails.displayName,
            onChange: handleChange,
            type: 'text'
          }}
        />
        <FormInput
          label={'Email'}
          inputOptions={{
            name: 'email',
            required: true,
            value: userDetails.email,
            onChange: handleChange,
            type: 'email'
          }}
        />

        <FormInput
          label={'Password'}
          inputOptions={{
            name: 'password',
            required: true,
            value: userDetails.password,
            onChange: handleChange,
            type: 'password'
          }}
        />

        <FormInput
          label={'Confirm Password'}
          inputOptions={{
            name: 'confirmPassword',
            required: true,
            value: userDetails.confirmPassword,
            onChange: handleChange,
            type: 'password'
          }}
        />

        <Button type="submit" >Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
