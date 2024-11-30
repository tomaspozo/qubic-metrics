import { HistoryChart } from "@/components/history-chart";
import { DateRangeSelector } from "@/components/date-range-selector";

function App() {
  return (
    <div className="flex justify-center p-12">
      <div className="grid grid-cols-1 gap-6 max-w-7xl w-full">
        <DateRangeSelector />
        <HistoryChart />
      </div>
    </div>
  );
}

export default App;
