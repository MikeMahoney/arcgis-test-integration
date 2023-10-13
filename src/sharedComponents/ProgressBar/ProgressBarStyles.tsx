import styled from 'styled-components'

export const ProgressBarWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 20px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.lightGrey};
`
export const ProgressBarInner = styled.div<{ width: number }>`
  display: flex;
  width: ${(props) => props.width}%;
  height: 20px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.lightBlue};
`
