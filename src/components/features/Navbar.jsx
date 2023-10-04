// import supabase from "../../config/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/data/icons";
import { useEffect } from "react";
import { useGlobalContext } from "../../contextAPI";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  //$ Store the user preference in the localstorage to persist the mode on page reloads.

  const { theme, setTheme } = useGlobalContext();
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    if (theme) {
      document.documentElement.classList.add("dracula");
    } else {
      document.documentElement.classList.remove("dracula");
    }
  }, [theme]);

  const handleTheme = () => {
    const newTheme = theme ? "light" : "dracula";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(!theme);
  };
  console.log(theme);
  const { faSun, faMoon } = icons;
  return (
    <nav
      className={`flex items-center navbar-height py-2.5 justify-around border-b ${
        theme ? "border-b-gray-600" : "border-b-gray-200"
      }`}
    >
      <div className="flex items-center w-40 gap-6 justify-end ml-auto mr-1 px-4 border-1 border-red-500">
        <span
          onClick={handleTheme}
          className="relative flex items-center justify-center text-base-content hover:cursor-pointer before:absolute before:border before:border-base-content before:content-[''] before:w-7 before:h-7 before:rounded-full"
        >
          {theme ? (
            <FontAwesomeIcon
              className="w-3.5 h-3.5"
              icon={faSun}
              data-tip="light"
            />
          ) : (
            <FontAwesomeIcon className="w-3.5 h-3.5" icon={faMoon} />
          )}
        </span>
        {location.pathname === "/" ? (
          <button className="btn btn-info btn-sm">Register</button>
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
