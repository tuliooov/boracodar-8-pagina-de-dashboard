'use client';

import Image from "next/image";
import { Result } from "./style";

export default function ExcelentResult() {
    return (
        <div>
            <Image src="./smile.svg" alt="smile green" width={100} height={100}/>
            <Result>Excelente!</Result>
        </div>
    )
}