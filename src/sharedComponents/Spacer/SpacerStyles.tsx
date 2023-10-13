import styled from 'styled-components'

export const SpacerWrapper = styled.div<{ height: number }>`
  display: block;
  height: ${(props) => props.height}px;
`
