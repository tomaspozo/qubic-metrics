import { parseAsStringEnum, useQueryState } from "nuqs";

import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const options = [
  {
    label: "7D",
    date: `${formatDate(
      new Date(new Date().setDate(new Date().getDate() - 7))
    )} – Today `,
  },
  {
    label: "30D",
    date: `${formatDate(
      new Date(new Date().setDate(new Date().getDate() - 30))
    )} – Today`,
  },
  {
    label: "3M",
    date: `${formatDate(
      new Date(new Date().setMonth(new Date().getMonth() - 3))
    )} – Today`,
  },
  {
    label: "1Y",
    date: `${formatDate(
      new Date(new Date().setMonth(new Date().getMonth() - 12))
    )} – Today`,
  },
  {
    label: "ALL",
    date: `All time`,
  },
];

export function DateRangeSelector() {
  const [range, setRange] = useQueryState(
    "range",
    parseAsStringEnum(options.map((item) => item.label)).withDefault("ALL")
  );

  return (
    <Tabs value={range} onValueChange={setRange}>
      <TabsList>
        {options.map((option) => (
          <TabsTrigger key={option.label} value={option.label}>
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
