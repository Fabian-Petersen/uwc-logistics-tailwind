import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResetPasswordForm from "../components/authentication/ResetPasswordForm";
import icons from "../assets/data/icons";
import { useNavigate } from "react-router-dom";
import resetPasswordImage from "../assets/images/resetPasswordImage.png";
import resetPasswordImagePortrait from "../assets/images/resetPasswordImagePortrait.png";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <main className="grid grid-cols-1 place-items-center w-[auto] h-screen bg-base-100">
      <div className="relative w-[20rem] h-[30rem] md:w-[40rem] md:h-[30rem] p-2 shadow-lg rounded-md md:grid md:grid-cols-2 md:gap-3 border border-gray-300 border-opacity-20">
        <picture>
          <source
            style={{ height: "100%" }}
            srcSet={resetPasswordImage}
            media="(max-width:768px)"
          />
          <img
            src={resetPasswordImagePortrait}
            alt="resetPasswordImage"
            className="w-full h-[40%] object-cover object-center md:h-full md:w-full"
          />
        </picture>
        <span
          className="absolute top-2 right-2 cursor-pointer tooltip tooltip-left"
          data-tip="Close"
        >
          <FontAwesomeIcon
            onClick={() => navigate("/")}
            icon={icons.faXmark}
            className="w-[1.5rem] h-[1.5rem] text-2xl hover:cursor-pointer text-gray-500 z-100"
          />
        </span>
        <ResetPasswordForm />
      </div>
    </main>
  );
};

export default ResetPassword;
