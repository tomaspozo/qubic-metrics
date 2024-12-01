import { OpenSourceHistoryChart } from "@/components/open-source-history-chart";
import { DateRangeSelector } from "@/components/date-range-selector";
import { OpenSourceStats } from "@/components/open-source-stats";

export default function OpenSource() {
  return (
    <>
      <OpenSourceStats />
      <DateRangeSelector />
      <OpenSourceHistoryChart />
    </>
  );
}
