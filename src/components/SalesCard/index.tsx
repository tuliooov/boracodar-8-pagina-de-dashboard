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
                <div>
                    <Dot tag="dot-sales-expect" /><Text>Esperado 100</Text>
                </div>
                <div>
                    <Dot tag="dot-sales-result" colors={["#CE9FFC","#7367F0" ]}/><Text>Alcançado 70</Text>
                </div>
            </Numbers>
        </Card>   
    )
}
