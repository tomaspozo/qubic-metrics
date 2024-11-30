import { HistoryChart } from "@/components/history-chart";
import { DateRangeSelector } from "@/components/date-range-selector";
import ScoresHistoryCharts from "@/components/scores-history-charts";
import SolutionsChart from "@/components/solutions-chart";
import SolutionsHourChart from "./components/solutions-hour-chart";

function App() {
  return (
    <div className="flex justify-center p-12">
      <div className="grid grid-cols-1 gap-6 max-w-7xl w-full">
        <DateRangeSelector />
        <HistoryChart />
        <ScoresHistoryCharts />
        <SolutionsHourChart />
        <SolutionsChart />
      </div>
    </div>
  );
}

export default App;
