import { SubTitleText, TitleText } from 'sharedComponents/TextStyles/TextStyles'
import { HeaderTitle, HeaderWrapper } from './HeaderStyles'
import Collapsible from 'sharedComponents/Collapsible/Collapsible'
import NavList from 'sharedComponents/NavList/NavList'
import { NavListItem } from 'sharedComponents/NavList/NavListStyles'

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        <TitleText>Scottish Wildlife Locater</TitleText>
      </HeaderTitle>
      <div>
        <Collapsible title={'Mammals'} active>
          <NavList>
            <NavListItem>
              <SubTitleText>{'Wildcat'}</SubTitleText>
            </NavListItem>
          </NavList>
        </Collapsible>
        <Collapsible title={'Birds'}>
          <NavList>
            <NavListItem>
              <SubTitleText>{'Puffin'}</SubTitleText>
            </NavListItem>
          </NavList>
        </Collapsible>
      </div>
    </HeaderWrapper>
  )
}

export default Header
