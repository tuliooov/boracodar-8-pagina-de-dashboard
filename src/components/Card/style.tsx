import styled from 'styled-components'


export const Root = styled.div`
  filter: drop-shadow(3px 4px 10px var(--color-shadow));
  background: var(--background-card);
  /* min-width: 379px; */
  border-radius: 16px;
  padding: 29px 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Text = styled.p`
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
`