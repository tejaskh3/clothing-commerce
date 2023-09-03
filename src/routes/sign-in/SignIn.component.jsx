import './SignIn.styles.scss';
import { useEffect } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth
} from '../../utils/firebase/firebase.utils';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../component/sign-up-form/SignUpForm.component';
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup(); //response ->first extarcting the user user details and than create it.
    const userDocRef = await createUserDocumentFromAuth(user); // -> creating the user if it doesn't exist in the document yet.
  };

  useEffect(() => {
    const func = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    };
    func();
  }, []);
  return (
    <div>
      <h1>Sign IN</h1>
      <button onClick={logGoogleUser}>sign IN with google popup</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
