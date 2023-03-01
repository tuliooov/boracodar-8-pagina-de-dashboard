'use client';

import Image from "next/image";
import Card from "../Card";
import ExcelentResult from "./results";

export default function NPSCard() {
    return (
        <Card title="NPS geral">
            <ExcelentResult />
            <p>NPS Score 75</p>
        </Card>   
    )
}
