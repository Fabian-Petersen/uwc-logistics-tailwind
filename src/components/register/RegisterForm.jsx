// import supabase from "../../config/supabaseClient";
// import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormRowInput from "../features/FormRowInput";
import FormRowSelect from "../features/FormRowSelect";
import {
  selectData,
  inputData,
} from "../../assets/data/RegisterFormFieldsData";
import departments from "../../assets/data/departments";
import { useGlobalContext } from "../../contextAPI";
import UserPool from "../../aws/UserPool";

const RegisterForm = () => {
  const { registerUser, setRegisterUser } = useGlobalContext();

  const navigate = useNavigate();

  //$  ============================ Collect User Data ========================== //
  const handleChange = (e) => {
    console.log(e);
    setRegisterUser((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
      };
    });
    console.log(registerUser);
  };

  //$  ============================ Register New User with AWS Cognito ========================== //

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisterUser(registerUser);
    const { email, password } = registerUser;

    UserPool.signUp(email, password, [], null, (error, data) => {
      console.log(data);
      if (error) {
        console.error(error);
        toast.error("Error Registering Account, Contact Administrator");
      }
      toast.success("Successfully Registered, Please Login....");
      navigate("/");
    });
  };

  <select name="department" onChange={handleChange}>
    <option value="" defaultValue={""}>
      Select Department
    </option>
    {departments.map((item, index) => {
      return <option key={index}>{item}</option>;
    })}
  </select>;

  return (
    <form className="flex flex-col justify-center gap-4 xl:gap-6 sm:w-[75%] lg:w-[60%] xl:w-[45%] max-w-7xl bg-base-content p-6 rounded-xl">
      <h2 className="text-3xl xl:text-4xl text-base-100 uppercase my-2 mx-auto tracking-wider">
        Register
      </h2>

      {/* //$Map through the data for the select fields in the form */}
      {selectData.map((item, index) => {
        return (
          <FormRowSelect
            key={index}
            name={item.name}
            placeholderText={item.placeholderText}
            myArray={item.options}
            onChange={handleChange}
          />
        );
      })}
      {/* //$Map through the data for the input fields in the form */}
      {inputData.map((item, index) => {
        return (
          <FormRowInput
            key={index}
            inputType={item.inputType}
            name={item.name}
            placeholderText={item.placeholderText}
            onChange={handleChange}
          />
        );
      })}
      <button
        className="btn btn-primary text-primary-content hover:cursor-pointer tracking-wider"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
