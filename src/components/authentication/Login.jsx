import FormRowInput from "../features/FormRowInput";
import { useForm } from "react-hook-form";

// import { useNavigate } from "react-router-dom";
// import { useGlobalContext } from "../../contextAPI";
// import supabase from "../../config/supabaseClient";
// import { toast } from "react-hot-toast";
// import { useMutation } from "@tanstack/react-query";

const Login = () => {
  //$ 1. ====== use navigate hook to redirect the page to the dashboard once logged in. ====== //
  // const navigate = useNavigate();
  //$ 2. ====== use context hook to to manage the state variables to be used in application ====== //
  // const { setUserData, userData, setToken } = useGlobalContext();

  //$ 3. ====== handle the values entered by the user in the login form and store the data in the userData variable. ====== //
  // const handleChange = (e) => {
  //   console.log(e);
  //   // setUserData((prevUserDate) => {
  //   return {
  //     // ...prevUserDate,
  //     // [e.target.name]: e.target.value,
  //   };
  //   // });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   mutate(userData);
  // };

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <form className="flex flex-col justify-end mx-auto w-80 h-96 border border-red-400 bg-gray-600 rounded-xl p-2 gap-y-3">
      <h2 className="text-white text-3xl mb-auto justify-center mx-auto">
        Login
      </h2>
      <img
        className="w-40 h-40 rounded-[50%] mx-auto border-4 border-white bg-cover bg-center"
        src="./src/assets/images/jurica-koletic.jpg"
        alt="ProfileImage"
      />
      <FormRowInput
        name="email"
        type="email"
        placeholderText="email"
        inputType="input"
        // onChange={handleChange}
        className="formInput"
        register={register}
        errors={errors}
      />
      <FormRowInput
        name="password"
        type="password"
        placeholderText="password"
        inputType="input"
        // onChange={handleChange}
        className="formInput"
        register={register}
        errors={errors}
      />
      <button type="submit" className="btn hover:pointer hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default Login;
