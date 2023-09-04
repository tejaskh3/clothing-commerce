import './Button.styles.scss';
const BUTTON_TYPE_CLASS = {
  google: 'google-sign-in',
  inverted: 'inverted'
};
const Button = ({ children, buttonType,...otherProps }) => {
  return (
    <div
      className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
    >
      <button  {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default Button;
