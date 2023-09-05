import './Authentication.styles.scss';
import SignUpForm from '../../component/sign-up-form/SignUpForm.component';
import SignInForm from '../../component/sign-in-form/SignInForm.component';
const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
