import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../assets/data/navLinks";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import SidebarMenuSubLinks from "./SidebarMenuSubLinks";
import { useState } from "react";

const SidebarMenuOpen = () => {
  const [openSublinks, setOpenSubLinks] = useState(true);

  return (
    <ul className="left-0 flex flex-col gap-y-4 w-full content-center">
      {navLinks.map((link, index) => {
        const { name, path, icon, sublinks = [] } = link;
        return (
          <li
            key={index}
            className={
              window.location.pathname === path
                ? "active p-3 flex tracking-wider"
                : "flex p-3 tracking-wider text-xl w-full text-textDark hover:bg-blue-300 hover:text-primary hover:pointer"
            }
            onClick={() => setOpenSubLinks(!openSublinks)}
          >
            <span className="mr-4">
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
