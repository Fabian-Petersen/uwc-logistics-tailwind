import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/data/icons";
import { useGlobalContext } from "../../contextAPI";
import { useEffect } from "react";

const ThemeButton = () => {
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

  const { faSun, faMoon } = icons;

  const handleTheme = () => {
    const newTheme = theme ? "light" : "dracula";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(!theme);
  };

  return (
    <div>
      <button
        role="button"
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
      </button>
    </div>
  );
};

export default ThemeButton;
