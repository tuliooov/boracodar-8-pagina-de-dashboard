'use client';

import Image from "next/image";
import { Result, Root } from "./style";

export default function ExcelentResult() {
    return (
        <Root>
            <Image src="./smile.svg" alt="smile green" width={100} height={100}/>
            <Result>Excelente!</Result>
        </Root>
    )
}