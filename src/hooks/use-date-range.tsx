import { parseAsStringEnum, useQueryState } from "nuqs";

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export const rangeOptions = [
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

export const useDateRange = () =>
  useQueryState(
    "range",
    parseAsStringEnum(rangeOptions.map((item) => item.label)).withDefault("30D")
  );
