import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const salesData = [
  { year: "2013", sales: 910811 },
  { year: "2014", sales: 1058172 },
  { year: "2015", sales: 1233335 },
  { year: "2016", sales: 1623409 },
  { year: "2017", sales: 2427179 },
  { year: "2018", sales: 3412522 },
  { year: "2019", sales: 3313707 },
  { year: "2020", sales: 4146045 },
  { year: "2021", sales: 5187449 },
  { year: "2022", sales: 8027891 },
  { year: "2023", sales: 9563000 },
  { year: "2024", sales: 12147256 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary))",
  },
};

export const SalesChart = () => {
  return (
    <Card className="border-2 border-primary/10 bg-card/50 backdrop-blur-sm shadow-elegant">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold">
          <span className="text-foreground">Our Sales Per Year </span>
          <span className="bg-gradient-accent bg-clip-text text-transparent">in USD</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2 sm:px-6">
        <ChartContainer config={chartConfig} className="h-[300px] sm:h-[400px] lg:h-[500px] w-full">
          <BarChart data={salesData} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis
              dataKey="year"
              stroke="hsl(var(--muted-foreground))"
              fontSize={10}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              width={60}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) =>
                    `$${Number(value).toLocaleString("en-US")}`
                  }
                />
              }
            />
            <Bar
              dataKey="sales"
              fill="hsl(var(--primary))"
              radius={[8, 8, 0, 0]}
              label={{
                position: "top",
                formatter: (value: number) => `$${(value / 1000000).toFixed(1)}M`,
                fill: "hsl(var(--foreground))",
                fontSize: 9,
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
