'use client';

import { Root } from "./style";


interface DotProps {
    tag: string
    colors?: string[]
}
export default function Dot({tag, colors}: DotProps) {

    return (
        <Root>
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="8" r="7.5" fill={colors ? `url(#${tag}_linear_201_96)` : '#4A4556'} />
                {colors && <defs>
                    <linearGradient id={`${tag}_linear_201_96`} x1="1.50321e-08" y1="6.74365" x2="11.7259" y2="14.0533" gradientUnits="userSpaceOnUse">
                        <stop stop-color={colors[0]}/>
                        <stop offset="1" stop-color={colors[1]}/>
                    </linearGradient>
                </defs>}
            </svg>
        </Root>
    )
}

