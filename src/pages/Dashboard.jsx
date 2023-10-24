import CardContainer from "../components/dashboard/CardContainer";
import ChartContainer from "../components/dashboard/ChartContainer";

const Dashboard = () => {
  return (
    <main className="border-2 border-blue-500 grid grid-flow-row grid-cols-2 col-start-2 col-end-3 row-start-2 row-end-3 gap-2">
      <CardContainer />
      <ChartContainer />
    </main>
  );
};

export default Dashboard;
