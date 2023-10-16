import { Animals, TAnimal } from 'data/animalData'
import { action, createStore } from 'easy-peasy'

export const wildLifesStore = createStore({
  selectedCategory: 'MAMMALS',
  selectedAnimal: Animals[0].animals[0],
  setSelectedAnimal: action((state: any, payload: TAnimal) => {
    state.selectedAnimal = payload
  }),
  setSelectedCategory: action((state: any, payload: string) => {
    state.selectedCategory = payload
  })
})
