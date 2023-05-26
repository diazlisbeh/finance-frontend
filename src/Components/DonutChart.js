import React, { useContext } from "react"
import { Card, Title, DonutChart } from "@tremor/react";
import { MyContext } from "@/context/context";


//const {transaction} = useContext(MyContext);

const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default function Donutchart({transaction}){
    return(
        <>
            <Card className="max-w-lg w-48">
            <Title>Sales</Title>
            <DonutChart
                className="mt-10"
                data={transaction}
                category="amount"
                index="categoryName"
                valueFormatter={valueFormatter}
                colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
            />
            </Card>

        </>
    )
}
