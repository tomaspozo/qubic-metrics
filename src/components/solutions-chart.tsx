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

import { useGetQubicLIScoresHistoryQuery } from "@/api/client";
import { useDateRange } from "@/hooks/use-date-range";

const chartConfig = {
  sum: {
    label: "Total solutions",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function SolutionsChart() {
  const [range] = useDateRange();

  const { data, isLoading } = useGetQubicLIScoresHistoryQuery({
    range,
    timeline: "5min",
  });

  return (
    <Card className="w-full">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Total solutions</CardTitle>
          <CardDescription>Qubic total solutions over time</CardDescription>
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
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="sum"
              type="natural"
              fill={chartConfig.sum.color}
              fillOpacity={0.2}
              stroke={chartConfig.sum.color}
              stackId="a"
              yAxisId="left"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
