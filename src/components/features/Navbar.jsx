import ThemeButton from "./ThemeButton";
import Status from "../../components/authentication/Status";

const Navbar = () => {
  const isHomePage = location.pathname === "/";
  const backgroundClass = isHomePage ? "null" : "bg-base-200";

  return (
    <nav
      className={`col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-end navbar-height ${backgroundClass}`}
    >
      <Status />
      <div className="flex items-center w-50 gap-6 justify-end px-4">
        <p className="relative flex items-center justify-center capitalize text-center text-primary font-semibold hover:cursor-pointer before:absolute before:border before:border-base-content before:content-[''] before:w-7 before:h-7 before:rounded-full">
          FP
        </p>
        <ThemeButton />
      </div>
    </nav>
  );
};
export default Navbar;
