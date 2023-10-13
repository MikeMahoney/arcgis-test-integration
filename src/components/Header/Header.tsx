import { TitleText } from 'sharedComponents/TextStyles/TextStyles'
import { HeaderTitle, HeaderWrapper } from './HeaderStyles'

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        <TitleText>ArcGIS Test</TitleText>
      </HeaderTitle>
    </HeaderWrapper>
  )
}

export default Header
