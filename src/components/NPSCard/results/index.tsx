'use client';

import Image from "next/image";
import { Result } from "./style";

export default function ExcelentResult() {
    return (
        <div>
            <Image src="./smile.svg" alt="smile green" width={50} height={50}/>
            <Result>Excelente!</Result>
        </div>
    )
}