import SidebarMenuOpen from "./SidebarMenuOpen";
import SidebarUserDetails from "./SidebarUserDetails";
import SidebarHeader from "./SidebarHeader";
import { useGlobalContext } from "../../contextAPI";
// import PropTypes from "prop-types";

const Sidebar = () => {
  const { theme } = useGlobalContext();
  return (
    <aside className="h-screen fixed w-80">
      <nav className="h-full flex flex-col bg-base-200 shadow-sm">
        <SidebarHeader />
        <hr
          className={`w-[95%] text-gray-600 opacity-80 mx-auto mb-4
            ${theme ? "opacity-10" : "opacity-90"}`}
        />
        <SidebarMenuOpen />
        <hr
          className={`w-[95%] text-gray-600 opacity-80 mx-auto mt-4 ${
            theme ? "opacity-10" : "opacity-90"
          }`}
        />
        <SidebarUserDetails />
      </nav>
    </aside>
  );
};

// Sidebar.propTypes = {
//   children: PropTypes.string,
// };

export default Sidebar;
