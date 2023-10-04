import PropTypes from "prop-types";

const FormRowInput = ({
  type,
  name,
  labelText,
  inputType,
  placeholderText,
  className,
  defaultValues,
  register,
  errors,
}) => {
  return (
    <>
      {labelText ? <label>{labelText}</label> : ""}
      {(inputType === "input" && (
        <input
          type={type}
          name={name}
          {...register(name)}
          placeholder={placeholderText}
          className={className}
          defaultValue={defaultValues}
        />
      )) ||
        (inputType === "textArea" && (
          <textarea
            rows={4}
            type={type}
            name={name}
            {...register(name)}
            defaultValue={defaultValues}
          />
        ))}
      {errors.name && errors.name?.message && (
        <span className="form_error">{errors.name.message}</span>
      )}
    </>
  );
};

FormRowInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  className: PropTypes.string,
  defaultValues: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default FormRowInput;
