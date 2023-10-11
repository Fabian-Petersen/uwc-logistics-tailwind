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

  // async (newUser) => {
  //   // console.log(newUser);
  //   const { data, error } = await supabase.auth.signUp({
  //     email: newUser.email,
  //     password: newUser.password,
  //     options: {
  //       data: { ...newUser },
  //     },
  //   });

  return (
    <form className="grid grid-cols-1 w-full h-full bg-blue p-4 md:px-6">
      <div className="flex flex-col gap-2 h-full w-full md:justify-center">
        <h1 className="section-title text-xl mb-0 py-2">Register Account</h1>
      </div>
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
        className="bg-blue-500 my-auto text-white rounded-sm uppercase text-[0.8rem] py-1.5 hover:cursor-pointer hover:bg-blue-700 tracking-wider w-full md:text-md"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
