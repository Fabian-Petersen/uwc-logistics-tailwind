import FormRowInput from "../features/FormRowInput";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/UWC_logo.svg";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../contextAPI";
import { useContext } from "react";
import { AccountContext } from "../authentication/Account";

const Login = () => {
  const { authenticate } = useContext(AccountContext);

  //$ 1. ====== use navigate hook to redirect the page to the dashboard once logged in. ====== //
  const navigate = useNavigate();
  //$ 2. ====== use context hook to to manage the state variables to be used in application ====== //
  const { setUserData, userData } = useGlobalContext();

  //$ 3. ====== handle the values entered by the user in the login form and store the data in the userData variable. ====== //
  const handleChange = (e) => {
    setUserData((prevUserDate) => {
      return {
        ...prevUserDate,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    authenticate(userData.email, userData.password)
      .then((data) => {
        console.log("Logged in!", data);
        toast.success("Successfully Logged In");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error("Failed to login!", err);
        toast.error(err.message);
      });
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full h-full bg-white p-4"
    >
      <img className="h-[6rem] w-[6rem] mx-auto mb-6" src={logo} alt="logo" />
      <div className="px-8 flex flex-col h-full">
        <h2 className="text-2xl">Login</h2>
        <p className="text-[0.6rem] text-gray-300 mb-5 italic">
          Login to your account
        </p>
        <div className="flex flex-col gap-y-1 h-[60%]">
          <FormRowInput
            name="email"
            type="email"
            inputType="input"
            labelText="Email"
            className="loginInput"
            onChange={handleChange}
            register={register}
            errors={errors}
          />
          <FormRowInput
            name="password"
            type="password"
            inputType="input"
            labelText="Password"
            onChange={handleChange}
            register={register}
            errors={errors}
          />
          <Link
            to="/reset_password"
            className="hover:cursor-pointer text-[0.6rem] text-blue-500 my-2"
          >
            Forgot your password?
          </Link>
          <button
            type="submit"
            className="bg-blue-400 my-auto text-white rounded-sm uppercase text-[0.8rem] py-1.5 hover:cursor-pointer hover:bg-blue-700 tracking-wider w-full md:text-md "
          >
            Submit
          </button>
          <Link
            to="/register"
            className="hover:cursor-pointer text-[0.6rem] text-blue-500 italic my-2"
          >
            Create New Account?
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
