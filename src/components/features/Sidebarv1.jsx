import SidebarHeader from "./SidebarHeader";
import SidebarMenuOpen from "./SidebarMenuOpen";
import SidebarMenuClosed from "./SidebarMenuClosed";
import { useGlobalContext } from "../../contextAPI";

// import icons from "../../assets/data/icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  // const { faBars } = icons;
  const { openNav } = useGlobalContext();

  return (
    <nav
      className={
        openNav
          ? "openSidebar flex flex-col gap-5 bg-indigo-700 w-80 h-[100%] fixed top-0 left-0 z-40"
          : "closeSidebar w-20 h-[100%] bg-indigo-700 fixed top-0 left-0 z-40"
      }
    >
      <SidebarHeader />
      {openNav ? <SidebarMenuOpen /> : <SidebarMenuClosed />}
    </nav>
  );
};
export default Sidebar;
