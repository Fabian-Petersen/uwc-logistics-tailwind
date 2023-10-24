import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/data/icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contextAPI";

const SidebarUserDetails = () => {
  const { navOpen } = useGlobalContext();
  const { faRightFromBracket } = icons;
  const navigate = useNavigate();

  const handleClick = () => {
    toast.success("successfully logged out");
    navigate("/");
    console.log(window.location.pathname);
  };

  return (
    <div className="relative flex flex-row justify-around items-center">
      <button
        className="absolute left-[10%] sidebarBtn tooltip tooltip-right"
        data-tip="Logout"
        onClick={handleClick}
      >
        <FontAwesomeIcon className="w-6 h-6" icon={faRightFromBracket} />
      </button>
      <div
        className={`flex gap-2 items-center ${
          navOpen ? "invisible" : "visible ml-[2rem]"
        }`}
      >
        <img
          className="w-12 h-12 rounded-[50%] mx-auto border-4 border-primary bg-cover bg-center"
          src="./src/assets/images/jurica-koletic.jpg"
          alt="ProfileImage"
        />
        <h4 className="text-base-content">
          Hello, <span className="text-primary font-semibold">Fabian</span>
        </h4>
      </div>
    </div>
  );
};

export default SidebarUserDetails;
