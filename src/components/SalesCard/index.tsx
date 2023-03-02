'use client';

import Image from "next/image";
import Card from "../Card";
import DonoutChart from "../DonoutChart";
import Dot from "../Dot";
import { Numbers, Text } from "./style";

export default function SalesCard() {
    return (
        <Card title="Vendas fechadas">
            <DonoutChart tag="sales-card" colors={["#CE9FFC","#7367F0" ]} percentage={70}/>
            <Numbers>
                <Text><Dot tag="dot-sales-expect" />Esperado 100</Text>
                <Text><Dot tag="dot-sales-result" colors={["#CE9FFC","#7367F0" ]}/>Alcançado 70</Text>
            </Numbers>
        </Card>   
    )
}
