import RegisterForm from "../components/register/RegisterForm";
import registrationImagePortrait from "../assets/images/registrationImagePortrait.png";
import registrationImage from "../assets/images/registrationImage.png";

const Register = () => {
  return (
    <main className="grid grid-cols-1 place-items-center w-[auto] h-screen bg-base-100">
      <div className="relative w-[20rem] h-[30rem] md:w-[40rem] md:h-[30rem] p-2 shadow-lg rounded-md md:grid md:grid-cols-2 md:gap-3 border border-gray-300 border-opacity-20">
        <picture>
          <source
            style={{ height: "100%" }}
            srcSet={registrationImagePortrait}
            media="(max-width:768px)"
          />
          <img
            src={registrationImage}
            alt="resetPasswordImage"
            className="w-full h-[40%] bg-center bg-cover md:h-full md:w-full"
          />
        </picture>
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
