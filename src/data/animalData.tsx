export type TAnimalCategory = {
  id: string
  name: string
  animals: Array<TAnimal>
}

export type TAnimal = {
  id: string
  name: string
  coordinates: Array<number>
}

export const Animals: Array<TAnimalCategory> = [
  {
    id: 'MAMMALS',
    name: 'Mammals',
    animals: [
      {
        id: 'WILDCAT',
        name: 'Wildcat',
        coordinates: []
      }
    ]
  },
  {
    id: 'BIRDS',
    name: 'Birds',
    animals: [
      {
        id: 'PUFFIN',
        name: 'Puffin',
        coordinates: []
      }
    ]
  }
]
