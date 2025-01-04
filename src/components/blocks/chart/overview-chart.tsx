import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { date: "2024-04-01", subscriptions: 222, orders: 150 },
  { date: "2024-04-02", subscriptions: 97, orders: 180 },
  { date: "2024-04-03", subscriptions: 167, orders: 120 },
  { date: "2024-04-04", subscriptions: 242, orders: 260 },
  { date: "2024-04-05", subscriptions: 373, orders: 290 },
  { date: "2024-04-06", subscriptions: 301, orders: 340 },
  { date: "2024-04-07", subscriptions: 245, orders: 180 },
  { date: "2024-04-08", subscriptions: 409, orders: 320 },
  { date: "2024-04-09", subscriptions: 59, orders: 110 },
  { date: "2024-04-10", subscriptions: 261, orders: 190 },
  { date: "2024-04-11", subscriptions: 327, orders: 350 },
  { date: "2024-04-12", subscriptions: 292, orders: 210 },
  { date: "2024-04-13", subscriptions: 342, orders: 380 },
  { date: "2024-04-14", subscriptions: 137, orders: 220 },
  { date: "2024-04-15", subscriptions: 120, orders: 170 },
  { date: "2024-04-16", subscriptions: 138, orders: 190 },
  { date: "2024-04-17", subscriptions: 446, orders: 360 },
  { date: "2024-04-18", subscriptions: 364, orders: 410 },
  { date: "2024-04-19", subscriptions: 243, orders: 180 },
  { date: "2024-04-20", subscriptions: 89, orders: 150 },
  { date: "2024-04-21", subscriptions: 137, orders: 200 },
  { date: "2024-04-22", subscriptions: 224, orders: 170 },
  { date: "2024-04-23", subscriptions: 138, orders: 230 },
  { date: "2024-04-24", subscriptions: 387, orders: 290 },
  { date: "2024-04-25", subscriptions: 215, orders: 250 },
  { date: "2024-04-26", subscriptions: 75, orders: 130 },
  { date: "2024-04-27", subscriptions: 383, orders: 420 },
  { date: "2024-04-28", subscriptions: 122, orders: 180 },
  { date: "2024-04-29", subscriptions: 315, orders: 240 },
  { date: "2024-04-30", subscriptions: 454, orders: 380 },
  { date: "2024-05-01", subscriptions: 165, orders: 220 },
  { date: "2024-05-02", subscriptions: 293, orders: 310 },
  { date: "2024-05-03", subscriptions: 247, orders: 190 },
  { date: "2024-05-04", subscriptions: 385, orders: 420 },
  { date: "2024-05-05", subscriptions: 481, orders: 390 },
  { date: "2024-05-06", subscriptions: 498, orders: 520 },
  { date: "2024-05-07", subscriptions: 388, orders: 300 },
  { date: "2024-05-08", subscriptions: 149, orders: 210 },
  { date: "2024-05-09", subscriptions: 227, orders: 180 },
  { date: "2024-05-10", subscriptions: 293, orders: 330 },
  { date: "2024-05-11", subscriptions: 335, orders: 270 },
  { date: "2024-05-12", subscriptions: 197, orders: 240 },
  { date: "2024-05-13", subscriptions: 197, orders: 160 },
  { date: "2024-05-14", subscriptions: 448, orders: 490 },
  { date: "2024-05-15", subscriptions: 473, orders: 380 },
  { date: "2024-05-16", subscriptions: 338, orders: 400 },
  { date: "2024-05-17", subscriptions: 499, orders: 420 },
  { date: "2024-05-18", subscriptions: 315, orders: 350 },
  { date: "2024-05-19", subscriptions: 235, orders: 180 },
  { date: "2024-05-20", subscriptions: 177, orders: 230 },
  { date: "2024-05-21", subscriptions: 82, orders: 140 },
  { date: "2024-05-22", subscriptions: 81, orders: 120 },
  { date: "2024-05-23", subscriptions: 252, orders: 290 },
  { date: "2024-05-24", subscriptions: 294, orders: 220 },
  { date: "2024-05-25", subscriptions: 201, orders: 250 },
  { date: "2024-05-26", subscriptions: 213, orders: 170 },
  { date: "2024-05-27", subscriptions: 420, orders: 460 },
  { date: "2024-05-28", subscriptions: 233, orders: 190 },
  { date: "2024-05-29", subscriptions: 78, orders: 130 },
  { date: "2024-05-30", subscriptions: 340, orders: 280 },
  { date: "2024-05-31", subscriptions: 178, orders: 230 },
  { date: "2024-06-01", subscriptions: 178, orders: 200 },
  { date: "2024-06-02", subscriptions: 470, orders: 410 },
  { date: "2024-06-03", subscriptions: 103, orders: 160 },
  { date: "2024-06-04", subscriptions: 439, orders: 380 },
  { date: "2024-06-05", subscriptions: 88, orders: 140 },
  { date: "2024-06-06", subscriptions: 294, orders: 250 },
  { date: "2024-06-07", subscriptions: 323, orders: 370 },
  { date: "2024-06-08", subscriptions: 385, orders: 320 },
  { date: "2024-06-09", subscriptions: 438, orders: 480 },
  { date: "2024-06-10", subscriptions: 155, orders: 200 },
  { date: "2024-06-11", subscriptions: 92, orders: 150 },
  { date: "2024-06-12", subscriptions: 492, orders: 420 },
  { date: "2024-06-13", subscriptions: 81, orders: 130 },
  { date: "2024-06-14", subscriptions: 426, orders: 380 },
  { date: "2024-06-15", subscriptions: 307, orders: 350 },
  { date: "2024-06-16", subscriptions: 371, orders: 310 },
  { date: "2024-06-17", subscriptions: 475, orders: 520 },
  { date: "2024-06-18", subscriptions: 107, orders: 170 },
  { date: "2024-06-19", subscriptions: 341, orders: 290 },
  { date: "2024-06-20", subscriptions: 408, orders: 450 },
  { date: "2024-06-21", subscriptions: 169, orders: 210 },
  { date: "2024-06-22", subscriptions: 317, orders: 270 },
  { date: "2024-06-23", subscriptions: 480, orders: 530 },
  { date: "2024-06-24", subscriptions: 132, orders: 180 },
  { date: "2024-06-25", subscriptions: 141, orders: 190 },
  { date: "2024-06-26", subscriptions: 434, orders: 380 },
  { date: "2024-06-27", subscriptions: 448, orders: 490 },
  { date: "2024-06-28", subscriptions: 149, orders: 200 },
  { date: "2024-06-29", subscriptions: 103, orders: 160 },
  { date: "2024-06-30", subscriptions: 446, orders: 400 },
]

const chartConfig = {
  revenues: {
    label: "Revenues",
  },
  subscriptions: {
    label: "Subscriptions",
    color: "hsl(var(--chart-1))",
  },
  orders: {
    label: "Orders",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function OverviewChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("subscriptions")

  const total = React.useMemo(
    () => ({
      subscriptions: chartData.reduce((acc, curr) => acc + curr.subscriptions, 0),
      orders: chartData.reduce((acc, curr) => acc + curr.orders, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Total Revenue</CardTitle>
          <CardDescription>
            Showing total revenue for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["subscriptions", "orders"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="revenues"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
