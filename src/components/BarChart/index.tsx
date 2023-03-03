'use client';

import { Bar, Root } from "./style";

interface BarChartProps {
    colors: string[]
    columns: {
        label: string,
        value: number
    }[]
}
export default function BarChart({colors, columns}: BarChartProps) {
    
    const biggerNumber = columns.reduce((current, element) => {
        if(element.value > current){
            return element.value
        }
        return current
    }, 0)


    return (
        <Root>
            {columns.map((column, index) => (
                <Bar colors={colors} height={(150 * column.value) / biggerNumber} key={index}>
                    <div></div>
                    <p>{column.label}</p>
                </Bar>
            ))}
        </Root>
    )
}

