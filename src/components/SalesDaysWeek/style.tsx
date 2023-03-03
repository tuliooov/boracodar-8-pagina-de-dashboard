import styled from 'styled-components'


export const Root = styled.div`
  filter: drop-shadow(3px 4px 10px var(--color-shadow));
  background: var(--background-card);
  min-width: 379px;
  min-height: 296px;
  border-radius: 16px;
  padding: 29px 48px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`

export const Text = styled.p`
  font-size: 12px;
  font-family: Inter;
  font-weight: 600;
`

export const Topics = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  
`

export const Topic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  .result {
    font-size: 22px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }
`

export const Chart = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  
`