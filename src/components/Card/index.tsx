'use client';

import { Root, Text } from "./style";

interface CardProps {
    title: string
    children: React.ReactNode
}

export default function Card({
    title,
    children,
}: CardProps) {


    return (
        <Root>
            <Text>
                {title}
            </Text>
            {children}
        </Root>   
    )
}