import { SubTitleText, TitleText } from 'sharedComponents/TextStyles/TextStyles'
import { HeaderTitle, HeaderWrapper, Navigation } from './HeaderStyles'
import Collapsible from 'sharedComponents/Collapsible/Collapsible'
import NavList from 'sharedComponents/NavList/NavList'
import { NavListItem } from 'sharedComponents/NavList/NavListStyles'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { Animals, TAnimal, TAnimalCategory } from 'data/animalData'

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const selectedCategory: string = useStoreState(
    (state: any) => state.selectedCategory
  )
  const selectedAnimal: TAnimal = useStoreState(
    (state: any) => state.selectedAnimal
  )

  const setSelectedAnimal = useStoreActions(
    (actions: any) => actions.setSelectedAnimal
  )
  const setSelectedCategory = useStoreActions(
    (actions: any) => actions.setSelectedCategory
  )

  return (
    <HeaderWrapper>
      <HeaderTitle>
        <TitleText>Scottish Wildlife Locater</TitleText>
      </HeaderTitle>
      <Navigation>
        {Animals.map((category: TAnimalCategory, index: number) => (
          <Collapsible
            key={index}
            title={category.name}
            active={selectedCategory === category.id}
          >
            <NavList>
              {category.animals.map((animal: TAnimal, index: number) => (
                <NavListItem
                  key={index}
                  selected={selectedAnimal.id === animal.id}
                  onClick={() => {
                    setSelectedAnimal(animal)
                    setSelectedCategory(category.id)
                  }}
                >
                  <SubTitleText>{animal.name}</SubTitleText>
                </NavListItem>
              ))}
            </NavList>
          </Collapsible>
        ))}
      </Navigation>
    </HeaderWrapper>
  )
}

export default Header
