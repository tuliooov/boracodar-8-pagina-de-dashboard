'use client';

import BarChart from "../BarChart";
import Card from "../Card";
import Triangle from "../Triangle";
import { Chart, Content, Text, Topic, Topics } from "./style";

export default function SalesDaysWeek() {

    function getRandomArbitrary(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

    const columns = [
        {
            label: 'dom',
            value: getRandomArbitrary(100, 999)
        },
        {
            label: 'seg',
            value: getRandomArbitrary(100, 999)
        },
        {
            label: 'ter',
            value: getRandomArbitrary(100, 999)
        },
        {
            label: 'qua',
            value: getRandomArbitrary(100, 999)
        },
        {
            label: 'qui',
            value: getRandomArbitrary(100, 999)
        },
        {
            label: 'sex',
            value: getRandomArbitrary(100, 999)
        },
        {
            label: 'sab',
            value: getRandomArbitrary(100, 999)
        },
    ]

    return (
        <Card title="Vendas por dia da semana">
            <Content>
                <Topics>
                    <Topic>
                        <div>
                            <Triangle tag="day_with_more_sales" colors={["#81FBB8", "#28C76F"]} /><Text>Dia com mais vendas</Text>
                        </div>
                        <Text className="result">Quata-feira</Text>
                    </Topic>
                    <Topic>
                        <div>
                            <Triangle tag="day_with_less_sales" colors={["#EA5455", "#FEB692"]} rotate={180}/><Text>Dia com menos vendas</Text>
                        </div>
                        <Text className="result">Domingo</Text>
                    </Topic>
                </Topics>
                <Chart>
                    <BarChart colors={["#90F7EC", "#32CCBC"]} columns={columns} />
                </Chart>
            </Content>
        </Card>   
    )
}

