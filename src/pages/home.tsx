import { TopBar } from "@/components/top-bar";
import { DateRangeSelector } from "@/components/date-range-selector";
import { HistoryChart } from "@/components/history-chart";
import { ScoresHistoryCharts } from "@/components/scores-history-charts";
import { SolutionsChart } from "@/components/solutions-chart";
import { SolutionsHourChart } from "@/components/solutions-hour-chart";
import { Footer } from "@/components/footer";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-6 max-w-7xl w-full">
        <TopBar />
        <DateRangeSelector />
        <HistoryChart />
        <ScoresHistoryCharts />
        <SolutionsHourChart />
        <SolutionsChart />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
