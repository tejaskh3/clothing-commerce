import './SignIn.styles.scss'
import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
const SignIn = () => {
  const logGoogleUser = async ()=>{
    const {user} = await signInWithGooglePopup(); //response
    const userDocRef = await createUserDocumentFromAuth(user);

  }
  return (
    <div>
      <h1>Sign IN</h1>
      <button onClick={logGoogleUser}>sign IN with google popup</button>
    </div>
  )
}

export default SignIn
