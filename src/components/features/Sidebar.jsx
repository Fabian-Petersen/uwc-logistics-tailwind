import SidebarMenuOpen from "./SidebarMenuOpen";
import SidebarUserDetails from "./SidebarUserDetails";
import SidebarHeader from "./SidebarHeader";
import { useGlobalContext } from "../../contextAPI";

const Sidebar = () => {
  const { theme, openNav } = useGlobalContext();

  return (
    <aside
      className={`h-screen w-[15rem] md:w-[20rem] fixed ${
        openNav ? "z-0" : "z-10"
      }`}
    >
      <nav
        className={`h-full absolute top-0 left-0 flex flex-col bg-base-200 shadow-sm w-full z-50 ${
          openNav ? "transition-all duration-500 linear -translate-x-[80%]" : ""
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
