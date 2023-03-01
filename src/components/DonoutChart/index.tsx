'use client';

import { Content, Label, Porcentage, Root, Svg } from "./style";

export default function DonoutChart() {
    return (
        <Root>
            <Svg viewBox="0 0 232 232" porcentage={70}>
                <circle cx="50%" cy="50%" r={"98.5"} opacity="0.1" stroke="#D9D9D9" />
                <circle cx="50%" cy="50%" r={"98.5"} stroke="url(#paint0_linear_217_2)" />
                <defs>
                    <linearGradient id="paint0_linear_217_2" x1="1.97421e-07" y1="82" x2="154" y2="178" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#CE9FFC" />
                        <stop offset="1" stop-color="#7367F0" />
                    </linearGradient>
                </defs>
            </Svg>
            <Content>
                <Porcentage>
                    70%
                </Porcentage>
                <Label>
                    Alcançadas
                </Label>
            </Content>
        </Root>
    )
}

