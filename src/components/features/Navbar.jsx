import { useGlobalContext } from "../../contextAPI";
import { useNavigate } from "react-router-dom";
// import supabase from "../../config/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setUserData, setToken, setLogin, login, token } = useGlobalContext();
  const navigate = useNavigate();
  const handleLogin = () => {
    setToken(true);
    setLogin(true);
  };

  //? function to handle logging out of the session
  const handleLogout = async () => {
    try {
      // const { error } = await supabase.auth.signOut();
      setUserData("");
      setLogin(!login);
      navigate("/");
      setToken(false);
      // if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = () => {
    navigate("/register");
    setLogin(true);
  };

  //Define the current location the user is at to style elements accordingly.
  const location = window.location.pathname;
  return (
    <ul
      className={
        location === "/" ? "navbar w-screen" : "navbar w-full bg-slate-500"
      }
    >
      {token ? (
        <ul className="flex flex-1 justify-end items-center gap-4">
          {/* //$ 1. Welcome Text */}
          <li className="capitalize text-white">
            Hello,
            <span> Fabian</span>
            {/* <span>{token?.user?.user_metadata?.name}</span> */}
          </li>
          {/* //$ 2. User Icon */}
          <Link to="/user">
            <li className="w-1 h-1 rounded-[50%] flex justify-center items-center relative text-2xl text-primary">
              <FontAwesomeIcon icon={faUser} />
            </li>
          </Link>
          {/* //$ 3. Logout Button */}
          <li onClick={handleLogout} className="btn-login">
            Logout
          </li>
        </ul>
      ) : (
        <ul className="flex gap-4 flex-1 justify-end items-center">
          {/* //$ 4. Login Button */}
          <li onClick={handleLogin} className="btn-login">
            Login
          </li>
          <li onClick={handleSignUp} className="btn-login bg-primary">
            {/* //$ 5. Signup Button */}
            sign up
          </li>
        </ul>
      )}
    </ul>
  );
};
export default Navbar;
