import { TitleText } from 'sharedComponents/TextStyles/TextStyles'
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
  display: ${props => props.expanded ? 'flex' : 'none'};
  flex-direction: column;
  gap: 20px;
  position: absolute;
  padding: 20px;
  top: 60px;
  right: 5px;
  width: 90%;
  background-color: white;
  border-radius: 5px;
  ${TitleText} {
    color: ${(props) => props.theme.colors.oliveGreen};
  }
`

export const MapViewerInfoButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  svg {
    path:last-child{
      fill: ${(props) => props.theme.colors.oliveGreen};
    }
  }
  &:hover {
    cursor: pointer;
  }
`
