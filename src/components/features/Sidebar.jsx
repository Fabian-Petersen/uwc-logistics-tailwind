import SidebarMenuOpen from "./SidebarMenuOpen";
import SidebarUserDetails from "./SidebarUserDetails";
import SidebarHeader from "./SidebarHeader";
// import PropTypes from "prop-types";

const Sidebar = () => {
  return (
    <aside className="h-screen fixed w-80">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <SidebarHeader />
        <hr className="w-[95%] text-gray-600 opacity-80 mx-auto mb-4" />
        <SidebarMenuOpen />
        <hr className="w-[95%] text-gray-600 opacity-80 mx-auto mt-4" />
        <SidebarUserDetails />
      </nav>
    </aside>
  );
};

// Sidebar.propTypes = {
//   children: PropTypes.string,
// };

export default Sidebar;
