import styled from 'styled-components'


export const Root = styled.div`
  height: 150px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  gap: 4rem;

  ::before{
    content: "";
    height: 3px;
    width: 100%;
    background-color: #4A4556;
    border: none;
    z-index: -1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  @media only screen and (max-width: 768px) {
    gap: 0rem;
    width: 100%;
    padding: 0;
    justify-content: space-between;
  }
`

export const Bar = styled.div<{colors: string[]; height: number}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  div {
    background: ${({colors}) => `linear-gradient(
      ${colors[0]},
      ${colors[1]}
    )`};
    border-radius: 99999px;
    width: 15px;
    height: ${({height}) => height}px;
    animation: progress 2s ease-in-out;
    @keyframes progress {
      0% {
        height: 0px;
      }
    }
  }

  p {
    opacity: 0.7;
  }
`
