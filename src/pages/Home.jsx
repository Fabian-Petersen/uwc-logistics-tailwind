import Login from "../components/authentication/Login";

const Home = () => {
  return (
    <div className="flex flex-col pt-[10rem] gap-y-20 bg-homePageImage bg-cover bg-center bg-blend-multiply h-screen w-screen bg-gray-500">
      <h1 className=" text-white mx-auto tracking-wider sm:text-2xl md:text-5xl lg:text-7xl lg:tracking-[3px]">
        UWC TRANSPORT MANAGEMENT
      </h1>
      <Login />
    </div>
  );
};

export default Home;
