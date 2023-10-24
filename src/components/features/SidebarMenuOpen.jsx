import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../assets/data/navLinks";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import SidebarMenuSubLinks from "./SidebarMenuSubLinks";
import { useState } from "react";
import { useGlobalContext } from "../../contextAPI";

const SidebarMenuOpen = () => {
  const [openSublinks, setOpenSubLinks] = useState(true);
  const { navOpen } = useGlobalContext();

  return (
    <ul className="h-full left-0 justify-evenly flex flex-col gap-y-10 md:gap-y-2 w-[85%] content-center mx-auto">
      {navLinks.map((link, index) => {
        const { name, path, icon, sublinks = [] } = link;
        return (
          <li
            key={index}
            className={
              window.location.pathname === path
                ? "active p-2 md:p-2.5 flex tracking-wider"
                : "flex p-2 md:p-2.5 tracking-wider text-md md:text-lg lg:py-3.5 w-full text-base-content rounded-lg hover:bg-primary hover:px-2 hover:text-white hover:pointer"
            }
            onClick={() => setOpenSubLinks(!openSublinks)}
          >
            <span
              className={`mr-4 ${navOpen ? "" : "transition-x-[85%]"}
                `}
            >
              <FontAwesomeIcon className="fa-fw" icon={icon} />
            </span>
            <NavLink to={path} className="w-full">
              {name}
              {sublinks.length > 0 && (
                <FontAwesomeIcon
                  className={
                    openSublinks
                      ? "fa-fw submenu_icon submenu_icon_closed px-2"
                      : "fa-fw submenu_icon submenu_icon_open"
                  }
                  icon={faChevronRight}
                />
              )}
            </NavLink>
            {/* <SidebarMenuSubLinks
              sublinks={sublinks}
              openSublinks={openSublinks}
            /> */}
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarMenuOpen;
