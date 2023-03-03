import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const Row = styled.div<{columns: number; textAlign: string}>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  text-align: ${props =>props.textAlign};
  column-gap: 2rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(${props => Math.round(props.columns / 2)}, 1fr);
    row-gap: 2rem;
  }

  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 2rem;
  }

`
