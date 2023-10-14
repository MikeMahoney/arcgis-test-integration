import MapViewer from 'components/MapViewer/MapViewer'
import { MainWrapper } from './MainStyles'

interface IMain {}

const Main: React.FC<IMain> = () => {
  return (
    <MainWrapper>
      <MapViewer />
    </MainWrapper>
  )
}

export default Main
