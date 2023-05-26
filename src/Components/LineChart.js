import { Card, Title, AreaChart } from "@tremor/react";




const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };
  
export default function LineChart({transacion}){

return (
    <Card>
    <Title>Newsletter revenue over time (USD)</Title>
    <AreaChart
      className="h-72 mt-4"
      data={transacion}
      index="date"
      categories={[0, 1]}
      colors={["indigo", "cyan"]}
      valueFormatter={dataFormatter}
    />
  </Card>
)
}