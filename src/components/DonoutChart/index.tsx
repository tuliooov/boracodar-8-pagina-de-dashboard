'use client';

import { randomUUID } from "crypto";
import { Content, Label, Porcentage, Root, Svg } from "./style";

interface DonoutChartProps {
    tag: string
    colors: string[]
    percentage: number
}
export default function DonoutChart({tag, colors, percentage}: DonoutChartProps) {

    return (
        <Root>
            <Svg viewBox="0 0 232 232" porcentage={percentage}>
                <circle cx="50%" cy="50%" r={"98.5"} opacity="0.1" stroke="#D9D9D9" />
                <circle cx="50%" cy="50%" r={"98.5"} stroke={`url(#${`${tag}_linear_217_2`})`} />
                <defs>
                    <linearGradient id={`${tag}_linear_217_2`} x1="1.97421e-07" y1="82" x2="154" y2="178" gradientUnits="userSpaceOnUse">
                        <stop stop-color={colors[0]} />
                        <stop offset="1" stop-color={colors[1]} />
                    </linearGradient>
                </defs>
            </Svg>
            <Content>
                <Porcentage>
                    {percentage}%
                </Porcentage>
                <Label>
                    Alcançadas
                </Label>
            </Content>
        </Root>
    )
}

