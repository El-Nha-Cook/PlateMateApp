//file responsibility: make HTTP requests with fetch, 
// validation (handle nulls and errors), 
// normalize data

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export async function searchRecipes(query: string) {
  const res = await fetch(
    `${BASE_URL}/search.php?s=${query}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch recipes')
  }

  return res.json()
}