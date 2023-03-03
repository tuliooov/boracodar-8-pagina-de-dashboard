'use client';

import Image from "next/image";
import Card from "../Card";
import DonoutChart from "../DonoutChart";
import Dot from "../Dot";
import { Numbers, Text } from "./style";

export default function GoalCard() {
    return (
        <Card title="Meta mensal" >
            <DonoutChart tag="goal-card" colors={["#DF9780","#A66DE9" ]} percentage={90}/>
            <Numbers>
                <div>
                    <Dot tag="dot-sales-expect" /><Text>Esperado R$ 70K</Text>
                </div>
                <div>
                    <Dot tag="dot-sales-result" colors={["#CE9FFC","#7367F0" ]}/><Text>Alcançado R$ 63K</Text>
                </div>
            </Numbers>
        </Card>   
    )
}

