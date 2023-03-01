'use client';

import Image from "next/image";
import Card from "../Card";
import DonoutChart from "../DonoutChart";

export default function SalesCard() {
    return (
        <Card title="Vendas fechadas">
            <DonoutChart />
            <p>Esperado 100 alcaçado 70</p>
        </Card>   
    )
}

