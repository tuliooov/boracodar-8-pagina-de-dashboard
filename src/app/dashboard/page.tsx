'use client';

import Card from "@/components/Card";
import NPSCard from "@/components/NPSCard";
import { Root, Row } from "./style";

export const dynamic='force-dynamic';

export default function Dashboard({ searchParams }: any) {
    return (
        <Root>
            <Row columns={3} textAlign="center">
                <NPSCard />
                <Card title="Vendas fechadas">
                    <p>grafico</p>
                    <p>Esperado 100 alcaçado 70</p>
                </Card>
                <Card title="Meta mensal">
                    <p>grafico</p>
                    <p>Esperado R$ 70K Alcançado R$ 63K</p>
                </Card>
            </Row>
            <Row columns={1} textAlign="left">
                <Card title="Vendas por dia da semana">
                    <p>grafico</p>
                    <p>Esperado R$ 70K Alcançado R$ 63K</p>
                </Card>
            </Row>
        </Root>
    )
}