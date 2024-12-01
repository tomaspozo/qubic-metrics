import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { useDateRange, rangeOptions } from "@/hooks/use-date-range";

export function DateRangeSelector() {
  const [range, setRange] = useDateRange();

  return (
    <Tabs value={range} onValueChange={setRange}>
      <TabsList>
        {rangeOptions.map((option) => (
          <TabsTrigger key={option.label} value={option.label}>
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
