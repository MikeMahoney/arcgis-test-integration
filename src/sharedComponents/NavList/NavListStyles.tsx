import styled from 'styled-components'

export const NavListWrapper = styled.ul`
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.colors.oliveGreen};
  background-color: white;
  list-style-type: none;
`

export const NavListItem = styled.li`
  padding: 8px 0;
  &:hover {
    color: ${(props) => props.theme.colors.darkSeaGreen};
    cursor: pointer;
  }
`
