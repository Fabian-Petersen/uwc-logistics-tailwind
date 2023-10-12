import icons from "../../assets/data/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/UWC_logo.svg";
import { useGlobalContext } from "../../contextAPI";

const SidebarHeader = () => {
  const { setNavOpen, navOpen } = useGlobalContext();
  const { faChevronCircleLeft, faChevronCircleRight } = icons;

  const handleClick = () => {
    setNavOpen(!navOpen);
    console.log(navOpen);
  };

  return (
    <>
      <img
        className="w-24 h-24 mt-2 mx-auto mb-5 fill-white"
        src={logo}
        alt="campus_logo"
      />
      <div className="flex flex-col gap-4 z-10 text-base-content items-center mb-2">
        <p className="text-base-content">Department of Transport</p>
      </div>
      <div className="p-4 pb-2 flex justify-between items-center">
        {navOpen ? (
          <button
            className="sidebarBtn top-[1%] p-1 tooltip tooltip-right"
            onClick={handleClick}
            data-tip="open"
          >
            <FontAwesomeIcon icon={faChevronCircleRight} className="w-6 h-6" />
          </button>
        ) : (
          <button
            className="sidebarBtn top-[1%] p-1 tooltip tooltip-right"
            onClick={handleClick}
            data-tip="close"
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  );
};

export default SidebarHeader;
