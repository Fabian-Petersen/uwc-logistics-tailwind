// import supabase from "../../config/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/data/icons";
import { useEffect } from "react";
import { useGlobalContext } from "../../contextAPI";

const Navbar = () => {
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

  const { faSun, faMoon } = icons;
  return (
    <nav className="flex items-center h-15 bg-base-200 py-4 justify-around">
      <div className="flex items-center w-20 gap-6 justify-end ml-auto mr-1 px-4">
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
        <p className="relative flex items-center justify-center capitalize text-center text-primary font-semibold hover:cursor-pointer before:absolute before:border before:border-base-content before:content-[''] before:w-7 before:h-7 before:rounded-full">
          FP
        </p>
      </div>
    </nav>
  );
};
export default Navbar;
