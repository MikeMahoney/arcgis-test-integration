import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.darkSeaGreen};
  color: white;
  height: 100vh;
  width: 20vw;
  gap: 30px;
`

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px;
  gap: 10px;
`
