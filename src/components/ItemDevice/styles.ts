import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_100};
  border-radius: 20px;
  border: 1.5px solid ${({ theme }) => theme.COLORS.DARK_100};
  padding: 8px 18px;
`

export const Field = styled.View`
  flex-direction: row;
  align-items: center;
`
