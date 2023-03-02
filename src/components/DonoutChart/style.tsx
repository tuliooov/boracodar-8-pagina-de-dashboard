import styled from 'styled-components'


export const Root = styled.div`
  
`

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

export const Porcentage = styled.p`
  font-size: 200%;
  font-weight: 700;
`

export const Label = styled.p`

`

export const Svg = styled.svg<{porcentage: number}>`

  width: 19.7rem;
  height: 19.7rem;
  transform: rotate(-90deg) scale(0.8);

  circle {
    stroke-dasharray: 618;
    stroke-dashoffset: 618;
    stroke-width: 35;
    fill: none;

    :nth-child(1){
      stroke-dashoffset: 0;
    }
    
    :nth-child(2){
      stroke-dashoffset: calc(618 - ((618 * ${({porcentage}) => porcentage || 0}) / 100));
      stroke-linecap: round;
      animation: progress 1s ease-in-out forwards;
    }

  }


  @keyframes progress {
    0% {
      stroke-dasharray: 618;
      stroke-dashoffset: 618;
    }
  }



`