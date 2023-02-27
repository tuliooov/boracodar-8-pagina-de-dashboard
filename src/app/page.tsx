'use client';

import Link from "next/link"
import { OpenButton, Texts, TextsContainer } from "../styles/App.style"


export default async function App() {

  const handleOpen = (value: boolean) => () => {
    
  }

  return (
    <div>
      <div>
          <TextsContainer>
            <Texts>
              <h1>
                <strong>Challenge #08</strong> - Dashboard
              </h1>
            </Texts>

            <Link 
                target="_blank" 
                rel="noopener noreferrer" 
                href={`/dashboard`}
            >
              <OpenButton onClick={handleOpen(true)}>
                Open Boarding Pass
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
      </div>
    </div>
  )
}
