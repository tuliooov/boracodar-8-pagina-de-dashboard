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
`
