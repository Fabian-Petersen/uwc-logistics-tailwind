// import BarChartDash from "../../components/dashboard/BarChart";
import PieChartDash from "../../components/dashboard/PieChartDash";

const ChartContainer = () => {
  return (
    <div className="grid-flow-col row-start-2 row-end-3 px-2 border border-red-500">
      {/* <BarChartDash className="col-start-1 col-end-2" /> */}
      <div className="w-full h-full">
        <PieChartDash className="" />
        <PieChartDash className="" />
      </div>
    </div>
  );
};

export default ChartContainer;
