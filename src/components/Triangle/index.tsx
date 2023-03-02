'use client';

import { Root } from "./style";


interface TriangleProps {
    tag: string
    rotate?: number
    colors?: string[]
}
export default function Triangle({tag, colors, rotate = 0}: TriangleProps) {

    return (
        <Root>
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                transform: `rotate(${rotate}deg)`
            }}>
                <path d="M6.5 0.5L12.9952 11.75H0.00480938L6.5 0.5Z"  fill={colors ? `url(#${tag}_linear_201_96)` : '#4A4556'} />
                {colors && <defs>
                    <linearGradient id={`${tag}_linear_201_96`} x1="6.5" y1="0.5" x2="6.5" y2="15.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color={colors[0]}/>
                        <stop offset="1" stop-color={colors[1]}/>
                    </linearGradient>
                </defs>}
            </svg>
        </Root>
    )
}

