import { parseAsStringEnum, useQueryState } from "nuqs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

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
    <div className="flex items-center gap-2">
      <Select value={range} onValueChange={setRange}>
        <SelectTrigger
          className="w-[160px] rounded-lg sm:ml-auto"
          aria-label="Select a value"
        >
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent className="rounded-xl">
          {options.map((option) => (
            <SelectItem
              key={option.label}
              value={option.label}
              className="rounded-lg"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
