import SidebarMenuOpen from "./SidebarMenuOpen";
import SidebarUserDetails from "./SidebarUserDetails";
import SidebarHeader from "./SidebarHeader";
import { useGlobalContext } from "../../contextAPI";
import propTypes from "prop-types";
import SidebarMenuClosed from "./SidebarMenuClosed";

const Sidebar = () => {
  const { theme, navOpen } = useGlobalContext();

  return (
    <aside
      className={`fixed top-0 left-0 w-[20rem] ${navOpen ? "z-0" : "z-100"}`}
    >
      <nav
        className={`h-full flex flex-col bg-base-200 shadow-sm w-full z-50 ${
          navOpen
            ? "openSidebar transition-all duration-500 ease-out -translate-x-[0%]"
            : "closeSidebar transition-all duration-500 linear translate-x-[0]"
        }`}
      >
        <SidebarHeader />
        <hr
          className={`w-[95%] text-gray-600 opacity-80 mx-auto mb-2
            ${theme ? "opacity-20" : "opacity-90"}`}
        />
        {navOpen ? <SidebarMenuClosed /> : <SidebarMenuOpen />}
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
