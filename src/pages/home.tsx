import { DateRangeSelector } from "@/components/date-range-selector";
import { HistoryChart } from "@/components/history-chart";
import { ScoresHistoryCharts } from "@/components/scores-history-charts";
import { SolutionsChart } from "@/components/solutions-chart";
import { SolutionsHourChart } from "@/components/solutions-hour-chart";

export default function Home() {
  return (
    <>
      <DateRangeSelector />
      <HistoryChart />
      <ScoresHistoryCharts />
      <SolutionsHourChart />
      <SolutionsChart />
    </>
  );
}
