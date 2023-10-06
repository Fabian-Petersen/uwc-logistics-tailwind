import SidebarMenuOpen from "./SidebarMenuOpen";
import SidebarUserDetails from "./SidebarUserDetails";
import SidebarHeader from "./SidebarHeader";
import { useGlobalContext } from "../../contextAPI";

const Sidebar = () => {
  const { theme, openNav } = useGlobalContext();

  return (
    <aside className="h-screen w-80 fixed">
      <nav
        className={`h-full absolute top-0 left-0 flex flex-col bg-base-200 shadow-sm w-full z-50 ${
          openNav ? "transition-all duration-500 linear -translate-x-[85%]" : ""
        }`}
      >
        <SidebarHeader />
        <hr
          className={`w-[95%] text-gray-600 opacity-80 mx-auto mb-4
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
