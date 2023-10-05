import Login from "../components/authentication/Login";

const Home = () => {
  return (
    <main
      className="w-screen bg-gray-500 bg-blend-multiply bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          'url("./src/assets/images/UWC-central-campus-entry.jpg")',
      }}
    >
      <div className="grid place-content-center grid-cols-1 h-full w-full">
        <Login />
      </div>
    </main>
  );
};

export default Home;
