export type TAnimalCategory = {
  id: string
  name: string
  animals: Array<TAnimal>
}

export type TAnimal = {
  id: string
  name: string
  description: string
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
        description: 'Eurasian beavers are a native species to the UK, but they were hunted to extinction in the 16th Century. They are one of the world’s most adept natural engineers, with an incredible ability to create new wetlands, restore native woodland and improve conditions for a wide range of species including dragonflies, otters and fish.',
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
        description: 'The Scottish wildcat is a European wildcat population in Scotland. It was once widely distributed across Great Britain, but the population has declined drastically since the turn of the 20th century due to habitat loss and persecution. It is now limited to northern and eastern Scotland.',
        locations: [
          {
            id: 'CAIRNGORMS',
            name: 'Cairngorms',
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
        description: 'The puffin is a small auk, familiar as the ‘clowns’ of the coast with their brightly coloured bills, bumpy landings and waddling walk. The puffin is an unmistakeable bird: its top half is black, with a white belly and cheeks. It has a massive, multicoloured bill and orange, webbed feet. In winter they gain more black feathers and their beaks turn black and grey.',
        locations: []
      }
    ]
  }
]
