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

import { useGetGithubStatsHistoryQuery } from "@/api/client";
import { useDateRange } from "@/hooks/use-date-range";

const chartConfig = {
  starsCount: {
    label: "Stars ",
    color: "hsl(var(--chart-1))",
  },
  commits: {
    label: "Commits",
    color: "hsl(var(--chart-2))",
  },
  openIssues: {
    label: "Open Issues",
    color: "hsl(var(--chart-3))",
  },
  closedIssues: {
    label: "Closed Issues",
    color: "hsl(var(--chart-4))",
  },
  watchersCount: {
    label: "Watchers Count",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function OpenSourceHistoryChart() {
  const [range] = useDateRange();
  const { data = [], isLoading } = useGetGithubStatsHistoryQuery(range);

  return (
    <Card className="w-full">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Market Cap</CardTitle>
          <CardDescription>
            Qubic market cap evolution over time
          </CardDescription>
        </div>
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
            {Object.entries(chartConfig).map(([key, value]) => (
              <Area
                key={key}
                dataKey={key}
                type="natural"
                fill={value.color}
                fillOpacity={0.2}
                stroke={value.color}
                yAxisId={"left"}
              />
            ))}
            <ChartLegend content={<ChartLegendContent />} />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
