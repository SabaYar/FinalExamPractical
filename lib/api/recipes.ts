import axios from "axios"
import { Recipe } from "@/lib/api/types"

export async function fetchRecipes(): Promise<Recipe[]> {
  const res = await axios.get<Recipe[]>("https://api.npoint.io/6c48278e70bb1329ec40")
  return res.data
}
