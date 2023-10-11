import FormRowInput from "../features/FormRowInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../contextAPI";

//? AWS Cognito Packages

const ResetPasswordForm = () => {
  //$ 1. ====== use navigate hook to redirect the page to the dashboard once logged in. ====== //
  const navigate = useNavigate();
  //$ 2. ====== use context hook to to manage the state variables to be used in application ====== //
  const { setUserData } = useGlobalContext();

  //$ 3. ====== handle the values entered by the user in the login form and store the data in the userData variable. ====== //
  const handleChange = (e) => {
    setUserData((prevUserDate) => {
      return {
        ...prevUserDate,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
    toast.success("Success, Email Verification Sent");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 w-full h-full bg-blue p-4 md:px-6"
    >
      <div className="flex flex-col gap-2 h-full w-full md:justify-center">
        <h1 className="section-title text-xl mb-0 py-2">
          Forgot your Password?
        </h1>
        <p className="text-sm mb-6 md:text-xs md:leading-4 text-gray-300">
          Kindly enter the email address tied to your account, we will assist
          top reset your password
        </p>
        <div className="w-full flex flex-col gap-4">
          <FormRowInput
            name="email"
            type="email"
            inputType="input"
            placeholderText="Enter Email Address"
            onChange={handleChange}
            className={"py-2 text-gray-500 lowercase"}
          />
          <button
            type="submit"
            className="bg-blue-500 my-auto text-white rounded-sm uppercase text-[0.8rem] py-1.5 hover:cursor-pointer hover:bg-blue-700 tracking-wider w-full md:text-md"
          >
            Reset Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
