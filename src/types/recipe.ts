export interface Recipe {
    id: string
  name: string
  category: string
  area: string
  instructions: string
  thumbnail: string

  ingredients: {
    ingredient: string
    measure: string
  }[]
}