import styled from 'styled-components'


export const Root = styled.div`
  filter: drop-shadow(3px 4px 10px var(--color-shadow));
  background: var(--background-card);
  min-width: 379px;
  min-height: 296px;
  border-radius: 16px;
  padding: 29px 48px;
`


export const Text = styled.p`
  font-size: 12px;
  font-family: Inter;
  font-weight: 600;
`

export const Numbers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }
`