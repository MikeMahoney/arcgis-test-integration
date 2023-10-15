import { action, createStore } from 'easy-peasy'

export const wildLifesStore = createStore({
  selectedCategory: 'MAMMALS',
  selectedAnimal: 'WILDCAT',
  setSelectedAnimal: action((state: any, payload) => {
    state.selectedAnimal = payload
  }),
  setSelectedCategory: action((state: any, payload) => {
    state.selectedCategory = payload
  })
})
