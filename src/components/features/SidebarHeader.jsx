import icons from "../../assets/data/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/UWC_logo.svg";
import { useGlobalContext } from "../../contextAPI";

const SidebarHeader = () => {
  const { setNavOpen, navOpen } = useGlobalContext();
  const { faChevronLeft, faChevronRight } = icons;

  const handleClick = () => {
    setNavOpen(!navOpen);

    // todo ========================= Set the styles of the root element to open/close the sidebar ========================= //
    // if (navOpen) {
    //   // Get the element with id #root and add the class sidebarOpen
    //   document.getElementById("root").classList.add("sidebarOpen");
    //   document.getElementById("root").classList.remove("sidebarClosed");
    // }

    // if (!navOpen) {
    //   // Get the element with id #root and remove the class sidebarOpen
    //   document.getElementById("root").classList.remove("sidebarOpen");
    //   document.getElementById("root").classList.add("sidebarClosed");
    // }
  };

  return (
    <>
      <img
        className={`w-24 h-24 mt-2 mx-auto mb-5 ${
          navOpen ? "invisible mb-2" : "visible"
        }`}
        src={logo}
        alt="campus_logo"
      />
      <div
        className={`flex flex-col gap-4 z-10 text-base-content items-center mb-2 ${
          navOpen ? "invisible" : "visible"
        } `}
      >
        <p className="text-base-content">Department of Transport</p>
      </div>

      {window.innerWidth < 640 ? (
        <div className="p-4 pb-2 flex justify-between items-center">
          {navOpen ? (
            <button
              className="absolute top-[1%] p-1 tooltip tooltip-right right-[30%]"
              onClick={handleClick}
              data-tip="open"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
            </button>
          ) : (
            <button
              className="absolute top-[1%] p-1 tooltip tooltip-right left-[10%]"
              onClick={handleClick}
              data-tip="close"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SidebarHeader;
