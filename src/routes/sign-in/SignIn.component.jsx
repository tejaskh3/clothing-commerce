import './SignIn.styles.scss';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils';
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup(); //response
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGooglePopup(); //response
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign IN</h1>
      <button onClick={logGoogleUser}>sign IN with google popup</button>
      <button onClick={logGoogleRedirectUser}>
        sign IN with google redirect
      </button>
    </div>
  );
};

export default SignIn;
