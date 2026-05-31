//file responsibility: make HTTP requests with fetch, 
// validation (handle nulls and errors), 
// normalize data
import { type MealDBRaw, normalizeMeal } from "./types";
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export async function searchRecipes(query: string) {
  const res = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error('MealDB error: ${res.status}')
  const data = await res.json();

  console.log("MealDB raw response: ", data);
  
  return (data.meals as MealDBRaw[] ?? []).map(normalizeMeal);
}