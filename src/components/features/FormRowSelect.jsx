import PropTypes from "prop-types";
// import { useState, useEffect } from "react";

const FormRowSelect = ({
  myArray,
  name,
  labelText,
  defaultValues,
  // itemSelected,
  register,
  errors,
}) => {
  // const [registrationOptions, setRegistrationOptions] = useState([]);

  // useEffect(() => {
  //   const filteredOptions = myArray.filter(
  //     (item) => item?.model === itemSelected
  //   );
  //   setRegistrationOptions(filteredOptions);
  // }, [name, itemSelected, myArray]);

  return (
    <div className="flex_column">
      <label>{labelText}</label>
      <select name={name} {...register(name)} defaultValue={defaultValues}>
        <option value="blank"></option>
        {myArray.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
      {errors.name && errors.name?.message && (
        <span className="form_error">{errors.name.message}</span>
      )}
    </div>
  );
};

export default FormRowSelect;

FormRowSelect.propTypes = {
  myArray: PropTypes.array,
  name: PropTypes.string,
  labelText: PropTypes.string,
  defaultValues: PropTypes.string,
  itemSelected: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
};
