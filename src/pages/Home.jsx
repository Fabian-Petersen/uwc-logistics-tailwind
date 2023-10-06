import Login from "../components/authentication/Login";
import entranceImage from "../assets/images/UWC-central-campus-entry.jpg";

const Home = () => {
  return (
    <main className="grid grid-cols-1 place-items-center w-screen h-screen bg-base-300 border-2 border-blue-500">
      <div className="grid grid-cols-1 h-[30rem] w-[20rem] shadow-lg md:grid-cols-2 md:w-[40rem]">
        <img
          className="h-full bg-center bg-cover hidden md:block overlay z-[0]"
          src={entranceImage}
          alt="uwcEntranceImage"
          style={{ position: "relative" }}
        />
        <Login />
      </div>
    </main>
  );
};

export default Home;
