import SidebarMenuOpen from "./SidebarMenuOpen";
import SidebarUserDetails from "./SidebarUserDetails";
import SidebarHeader from "./SidebarHeader";
import { useGlobalContext } from "../../contextAPI";
import propTypes from "prop-types";

const Sidebar = ({ navOpen }) => {
  const { theme } = useGlobalContext();

  return (
    <aside
      className={`col-start-1 col-end-2 h-screen ${navOpen ? "z-0" : "z-10"}`}
    >
      <nav
        className={`h-full flex flex-col bg-base-200 shadow-sm w-full z-50 ${
          navOpen
            ? "openSidebar transition-all duration-500 linear -translate-x-[80%]"
            : "closeSidebar transition-all duration-500 linear translate-x-0"
        }`}
      >
        <SidebarHeader />
        <hr
          className={`w-[95%] text-gray-600 opacity-80 mx-auto mb-2
            ${theme ? "opacity-20" : "opacity-90"}`}
        />
        <SidebarMenuOpen />
        <hr
          className={`w-[95%] text-gray-600 opacity-80 mx-auto mt-auto ${
            theme ? "opacity-20" : "opacity-90"
          }`}
        />
        <SidebarUserDetails />
      </nav>
    </aside>
  );
};

export default Sidebar;

Sidebar.propTypes = { navOpen: propTypes.bool, setNavOpen: propTypes.func };
