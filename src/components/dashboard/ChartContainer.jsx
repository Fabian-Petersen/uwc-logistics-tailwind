import BarChartDash from "../../components/dashboard/BarChart";
import PieChartDash from "../../components/dashboard/PieChartDash";

const ChartContainer = () => {
  return (
    <div className="graph-container">
      <BarChartDash className="barChart" />
      <div className="smallCharts">
        <PieChartDash className="pieChart" />
        <PieChartDash className="pieChart" />
      </div>
    </div>
  );
};

export default ChartContainer;
