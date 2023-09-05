import FormInput from '../form-input/FormInput.component';
import Button from '../button/Button.component';
import './SignInForm.styles.scss';
import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

const defaultUser = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const [userDetails, setUserDetails] = useState(defaultUser);
  const { email, password } = userDetails;
  const handleChange = e => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
    console.log(userDetails);
  };
  const handleSubmit = async e => {
    event.preventDefault();

    try {
      const respose = await signInUserWithEmailAndPassword(email, password);
      console.log(respose.user);
      setUserDetails(defaultUser);
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Please provide the correct password.');
        return;
      }
      if (error.code === 'auth/user-not-found') {
        alert(
          'This email is not registerd with out platform, kindly try again'
        );
        return;
      }
      console.log(
        'error while signing the user with email and password funtion calling',
        error.message
      );
    }
  };
  const signInWithGoogle = async () => {
    try {
      const response = await signInWithGooglePopup();
      await createUserDocumentFromAuth(response.user);
      console.log(response.user);
    } catch (error) {
      console.log('error while signing in with popup,', error.message);
    }
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an Account.</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Email'}
          inputOptions={{
            name: 'email',
            required: true,
            value: email,
            onChange: handleChange,
            type: 'email'
          }}
        ></FormInput>
        <FormInput
          label={'Password'}
          inputOptions={{
            name: 'password',
            required: true,
            value: password,
            onChange: handleChange,
            type: 'password'
          }}
        ></FormInput>
        <div className="btn-container">
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType={'google'} onClick={signInWithGoogle}>
            Google Sign IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
