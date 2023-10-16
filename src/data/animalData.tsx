export type TAnimalCategory = {
  id: string
  name: string
  animals: Array<TAnimal>
}

export type TAnimal = {
  id: string
  name: string
  locations: Array<TAnimalLocation>
}

export type TAnimalLocation = {
  id: string
  name: string
  rings: Array<Array<number>>
}

export const Animals: Array<TAnimalCategory> = [
  {
    id: 'MAMMALS',
    name: 'Mammals',
    animals: [
      {
        id: 'BEAVER',
        name: 'Beaver',
        locations: [
          {
            id: 'CAIRNGORM',
            name: 'Cairngorm',
            rings: []
          }
        ]
      },
      {
        id: 'WILDCAT',
        name: 'Wildcat',
        locations: [
          {
            id: 'CAIRNGORM',
            name: 'Cairngorm',
            rings: [
              [-4, 57.2],
              [-4, 57.28],
              [-3.4, 57.405],
              [-3.0, 57.3],
              [-2.9, 57],
              [-3.0, 56.8],
              [-4.0, 56.7],
              [-4.4, 57]
            ]
          }
        ]
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
        locations: []
      }
    ]
  }
]
