import PropTypes from "prop-types";

const FormRowInput = ({
  type,
  name,
  labelText,
  inputType,
  placeholderText,
  className,
  defaultValues,
  // register,
  // errors,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {labelText ? <label>{labelText}</label> : ""}
      {(inputType === "input" && (
        <input
          type={type}
          name={name}
          // {...register(name)}
          placeholder={placeholderText}
          className={`text-[0.8rem] outline-none text-gray-500 ${className} lowercase tracking-wider focus:border-red-500 focus:border`}
          defaultValue={defaultValues}
        />
      )) ||
        (inputType === "textArea" && (
          <textarea
            rows={4}
            type={type}
            name={name}
            // {...register(name)}
            defaultValue={defaultValues}
          />
        ))}
      {/* {errors.name && errors.name?.message && (
        <span className="form_error">{errors.name.message}</span>
      )} */}
    </div>
  );
};

FormRowInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholderText: PropTypes.string,
  inputType: PropTypes.string,
  labelText: PropTypes.string,
  className: PropTypes.string,
  defaultValues: PropTypes.string,
  // register: PropTypes.func,
  // errors: PropTypes.object,
};

export default FormRowInput;
