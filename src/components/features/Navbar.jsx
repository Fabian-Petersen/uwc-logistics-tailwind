import { useLocation, useNavigate } from "react-router-dom";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const backgroundClass = isHomePage ? "null" : "bg-base-200";

  //$ Navigate to the Register Page.
  const handleClick = () => {
    navigate("/register");
  };

  return (
    <nav
      className={`flex items-center navbar-height justify-around ${backgroundClass}`}
    >
      <div className="flex items-center w-40 gap-6 justify-end ml-auto mr-1 px-4">
        <ThemeButton />
        {location.pathname === "/" ? (
          <button onClick={handleClick} className="btn btn-info btn-sm">
            Register
          </button>
        ) : (
          <p className="relative flex items-center justify-center capitalize text-center text-primary font-semibold hover:cursor-pointer before:absolute before:border before:border-base-content before:content-[''] before:w-7 before:h-7 before:rounded-full">
            FP
          </p>
        )}
      </div>
    </nav>
  );
};
export default Navbar;

// const NavBar = () => {

//   const actionElement = isHomePage ? getRegisterButton() : getProfileIcon();

//   return (
//     <nav className={`flex items-center navbar-height justify-around ${backgroundClass}`}>
//       <div className="flex items-center w-40 gap-6 justify-end ml-auto mr-1 px-4">
//         {getThemeIcon()}
//         {actionElement}
//       </div>
//     </nav>
//   );

//   function getRegisterButton() {
//     return <button onClick={handleClick} className="btn btn-info btn-sm">Register</button>;
//   }

//   function getProfileIcon() {
//     return (
//       <p className="relative flex items-center justify-center capitalize text-center text-primary font-semibold hover:cursor-pointer before:absolute before:border before:border-base-content before:content-[''] before:w-7 before:h-7 before:rounded-full">
//         FP
//       </p>
//     );
//   }

//   function getThemeIcon() {
//     return (
//       <span onClick={handleTheme} className="relative flex items-center justify-center text-base-content hover:cursor-pointer before:absolute before:border before:border-base-content before:content-[''] before:w-7 before:h-7 before:rounded-full">
//         {theme ? <FontAwesomeIcon className="w-3.5 h-3.5" icon={faSun} data-tip="light" /> : <FontAwesomeIcon className="w-3.5 h-3.5" icon={faMoon} />}
//       </span>
//     );
//   }
// };
