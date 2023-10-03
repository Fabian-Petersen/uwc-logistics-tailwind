import CardContainer from "../components/dashboard/CardContainer";
// import ChartContainer from "../components/dashboard/ChartContainer";

const Dashboard = () => {
  return (
    <main className="flex flex-col main-content-size dashboard-height ml-auto px-2 py-6 bg-base-100">
      <div className="flex-grow w-full p-0 m-0">
        <CardContainer />
      </div>
      {/* <ChartContainer /> */}
    </main>
  );
};

export default Dashboard;
