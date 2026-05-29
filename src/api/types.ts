// The raw shape MealDB returns — mirrors the API exactly
export interface MealDBRaw {
  idMeal: string
  strMeal: string
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strYoutube: string | null
  // MealDB uses numbered keys for ingredients/measures instead of an array
//   TS template literal types: 
  [key: `strIngredient${number}`]: string | null
  [key: `strMeasure${number}`]: string | null
}

// The normalized shape your app will actually use
export interface Ingredient {
  name: string
  measure: string
}

export interface Recipe {
  id: string
  title: string
  category: string
  area: string
  instructions: string
  thumbnail: string
  youtubeUrl: string | null
  ingredients: Ingredient[]
}

export function normalizeMeal(raw: MealDBRaw): Recipe {
  const ingredients: Ingredient[] = []

  for (let i = 1; i <= 20; i++) {
    const name = raw[`strIngredient${i}`]?.trim()
    const measure = raw[`strMeasure${i}`]?.trim()
    if (name) ingredients.push({ name, measure: measure ?? '' })
  }

  return {
    id: raw.idMeal,
    title: raw.strMeal,
    category: raw.strCategory,
    area: raw.strArea,
    instructions: raw.strInstructions,
    thumbnail: raw.strMealThumb,
    youtubeUrl: raw.strYoutube || null,
    ingredients,
  }
}