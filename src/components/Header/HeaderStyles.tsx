import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.lightGrey};
  background-repeat: no-repeat;
  background-position: 25% 90%;
  background-size: cover;
  height: 200px;
`

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 0 30px 60px;
  gap: 10px;
`
