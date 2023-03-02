'use client';

import Card from "../Card";
import ExcelentResult from "./results";
import { Text } from './style'

export default function NPSCard() {
    return (
        <Card title="NPS geral">
            <ExcelentResult />
            <Text>NPS Score 75</Text>
        </Card>   
    )
}
