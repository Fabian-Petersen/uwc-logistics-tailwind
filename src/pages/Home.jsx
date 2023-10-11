import Login from "../components/authentication/Login";
import entranceImage from "../assets/images/UWC-central-campus-entry.jpg";

const Home = () => {
  return (
    <main className="grid grid-cols-1 place-items-center w-screen h-screen bg-base-100">
      <div className="grid grid-cols-1 h-[30rem] w-[20rem] shadow-lg md:grid-cols-2 md:w-[40rem] border border-gray-300 border-opacity-20">
        <img
          className="h-full bg-center bg-cover hidden md:block overlay"
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
