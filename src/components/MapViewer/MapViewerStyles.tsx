import styled from 'styled-components'

export const MapViewerWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MapViewerContainer = styled.div`
  height: 100vh;
  width: 80vw;
`
export const MapViewerInfo = styled.div<{ expanded?: boolean }>`
  position: absolute;
  top: 5px;
  right: 5px;
  height: ${(props) => (props.expanded ? '50%' : '100px')};
  width: ${(props) => (props.expanded ? '90%' : '100px')};
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`
