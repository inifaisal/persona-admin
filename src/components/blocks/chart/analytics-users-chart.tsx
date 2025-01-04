import {  Line, LineChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"


export function AnalyticsUsersChart() {
  const data = [
    {
      users: 10400,
      newUsers: 240,
      pageViews: 115
    },
    {
      users: 14405,
      newUsers: 300,
      pageViews: 130
    },
    {
      users: 9400,
      newUsers: 200,
      pageViews: 159
    },
    {
      users: 8200,
      newUsers: 278,
      pageViews: 199
    },
    {
      users: 7000,
      newUsers: 189,
      pageViews: 160
    },
    {
      users: 9600,
      newUsers: 239,
      pageViews: 103
    },
    {
      users: 11244,
      newUsers: 278,
      pageViews: 112
    },
    {
      users: 26475,
      newUsers: 189,
      pageViews: 127
    },
  ]

  const chartConfig = {
    users: {
      label: "Users",
      color: "hsl(var(--primary))",
    },
    newUsers: {
      label: "New Users",
      color: "hsl(var(--primary))",
    },
    pageViews: {
      label: "Pageviews",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig

  return (
    <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-normal">Users</CardTitle>
        </CardHeader>
        <CardContent className="pb-0">
          <div className="text-2xl font-bold">43,500</div>
          <ChartContainer config={chartConfig} className="h-[80px] w-full">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="users"
                stroke="var(--color-users)"
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-normal">New Users</CardTitle>
        </CardHeader>
        <CardContent className="pb-0">
          <div className="text-2xl font-bold">10,124</div>
          <ChartContainer config={chartConfig} className="h-[80px] w-full">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="newUsers"
                stroke="var(--color-newUsers)"
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-normal">Pageviews</CardTitle>
        </CardHeader>
        <CardContent className="pb-0">
          <div className="text-2xl font-bold">435,500</div>
          <ChartContainer config={chartConfig} className="h-[80px] w-full">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="pageViews"
                stroke="var(--color-pageViews)"
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
