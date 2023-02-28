'use client';

import Link from "next/link"
import { Main, OpenButton, Root, Texts, TextsContainer } from "../styles/App.style"


export default function App() {

  const handleOpen = (value: boolean) => () => {
    
  }

  return (
    <Root>
        <TextsContainer>
          <Texts>
            <h1>
              <strong>Challenge #08</strong> - Dashboard
            </h1>
          </Texts>

          <Link 
              rel="noopener noreferrer" 
              href={`/dashboard`}
          >
            <OpenButton onClick={handleOpen(true)}>
              Open Dashboard
            </OpenButton>
        </Link>
        <footer>
          <p>
            &copy; 2023{' '}
            <a href="https://github.com/tuliooov"> Tuliooov #BoraCodar</a>
            <br></br>
            Challenge 08 - Run until you fly!
          </p>
        </footer>
        </TextsContainer>
    </Root>
  )
}
