import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/data/icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SidebarUserDetails = () => {
  const { faRightFromBracket } = icons;
  const navigate = useNavigate();

  const handleClick = () => {
    toast.success("successfully logged out");
    navigate("/");
    console.log(window.location.pathname);
  };

  return (
    <div className="flex items-center py-2 mt-2">
      <div className="flex gap-2 pl-2 items-center">
        <img
          className="w-12 h-12 rounded-[50%] mx-auto border-4 border-primary bg-cover bg-center"
          src="./src/assets/images/jurica-koletic.jpg"
          alt="ProfileImage"
        />
        <h4 className="text-base-content">
          Hello, <span className="text-primary font-semibold">Fabian</span>
        </h4>
      </div>
      <button
        className="sidebarBtn ml-auto p-1 tooltip tooltip-right"
        data-tip="Logout"
        onClick={handleClick}
      >
        <FontAwesomeIcon className="w-8 h-8" icon={faRightFromBracket} />
      </button>
    </div>
  );
};

export default SidebarUserDetails;
