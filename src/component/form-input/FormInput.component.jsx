import './FormInput.styles.scss';

const FormInput = ({
  label,
 inputOptions
}) => {
  return (
    <div className="group">
      <input
        className="form-input"
       {...inputOptions}
      />
      {label && (
        <label
          className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

// make it work later
// const FormInput = ({
//   htmlFor,
//   label,
//   // type,
//   // name,
//   // id,
//   // placeholder,
//   // value,
//   // handleChangeFunc
//   ...otherProps
// }) => {
//   return (
//     <>
//       <label htmlFor={htmlFor}>{label}</label>
//       <input {...otherProps} />
//     </>
//   );
// };

// export default FormInput;
