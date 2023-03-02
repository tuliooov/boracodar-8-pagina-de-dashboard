'use client';

import Card from "../Card";
import Triangle from "../Triangle";
import { Text, Topic, Topics } from "./style";

export default function SalesDaysWeek() {
    return (
        <Card title="Vendas por dia da semana">
            <Topics>
                <Topic>
                    <Text><Triangle tag="day_with_more_sales" colors={["#81FBB8", "#28C76F"]} /> Dia com mais vendas</Text>
                    <Text className="result">Quata-feira</Text>
                </Topic>
                <Topic>
                    <Text><Triangle tag="day_with_less_sales" colors={["#EA5455", "#FEB692"]} rotate={180}/>Dia com menos vendas</Text>
                    <Text className="result">Domingo</Text>
                </Topic>
            </Topics>
        </Card>   
    )
}

