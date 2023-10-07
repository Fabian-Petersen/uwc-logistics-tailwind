import CardContainer from "../components/dashboard/CardContainer";
// import ChartContainer from "../components/dashboard/ChartContainer";
import { useGlobalContext } from "../contextAPI";

const Dashboard = () => {
  const { openNav } = useGlobalContext();
  console.log(openNav);
  return (
    <main
      className={`flex flex-col ${
        openNav === false
          ? "main-content-sidebarOpen block"
          : "main-content-sidebarClosed px-10 block"
      } border-2 border-red-400 dashboard-height ml-auto px-2 py-6 bg-base-100`}
    >
      <div className="flex-grow w-full px-4 m-0">
        <CardContainer />
      </div>
      {/* <ChartContainer /> */}
    </main>
  );
};

export default Dashboard;
