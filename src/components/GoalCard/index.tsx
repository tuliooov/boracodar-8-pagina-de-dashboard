'use client';

import Image from "next/image";
import Card from "../Card";
import DonoutChart from "../DonoutChart";
import Dot from "../Dot";
import { Numbers, Text } from "./style";

export default function GoalCard() {
    return (
        <Card title="Meta mensal">
            <DonoutChart tag="goal-card" colors={["#DF9780","#A66DE9" ]} percentage={90}/>
            <Numbers>
                <Text><Dot tag="dot-sales-expect" />Esperado R$ 70K</Text>
                <Text><Dot tag="dot-sales-result" colors={["#CE9FFC","#7367F0" ]}/>Alcançado R$ 63K</Text>
            </Numbers>
        </Card>   
    )
}

