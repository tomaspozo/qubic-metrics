import * as React from "react";
import { Area, CartesianGrid, ComposedChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useGetQubicStatsQuery } from "@/api/client";

const chartConfig = {
  marketCap: {
    label: "Market Cap",
    color: "hsl(var(--chart-1))",
  },
  btcMarketCap: {
    label: "Market Cap in BTC",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

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

export function HistoryChart() {
  const [timeRange, setTimeRange] = React.useState("ALL");

  const { data = [], isLoading } = useGetQubicStatsQuery(timeRange);

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Market Cap</CardTitle>
          <CardDescription>
            Qubic market cap evolution over time
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
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
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        {isLoading && (
          <div className="flex items-center justify-center">
            <span className="text-muted-foreground">Loading...</span>
          </div>
        )}
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <ComposedChart data={data}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              hide={true}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              hide={true}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="marketCap"
              type="natural"
              fill={chartConfig.marketCap.color}
              fillOpacity={0.2}
              stroke={chartConfig.marketCap.color}
              stackId="a"
              yAxisId="left"
            />
            <Area
              dataKey="btcMarketCap"
              type="natural"
              fill={chartConfig.btcMarketCap.color}
              fillOpacity={0.2}
              stroke={chartConfig.btcMarketCap.color}
              stackId="b"
              yAxisId="right"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
