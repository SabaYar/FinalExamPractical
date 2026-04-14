"use client"

import React from "react"
import { fetchRecipes } from "@/lib/api/recipes"
import { useQuery } from "@tanstack/react-query"
import { Recipe } from "@/lib/api/types"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { PageContainer } from "@/components/page-container"

export default function RecipeList() {
  const { data } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  })

  return (
    <PageContainer>
      <h1 className="text-4xl text-green-700">Recipe List</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Dish Name</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Cuisine Type</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead>Servings</TableHead>
            <TableHead>Available</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((recipe: Recipe) => (
            <TableRow key={recipe.id}>
              <TableCell>{recipe.id.toLocaleString()}</TableCell>
              <TableCell>{recipe.dishName}</TableCell>
              <TableCell>{recipe.rating.toLocaleString()}</TableCell>
              <TableCell>{recipe.cuisineType}</TableCell>
              <TableCell>{recipe.featured.toLocaleString()}</TableCell>
              <TableCell>{recipe.servings.toLocaleString()}</TableCell>
              <TableCell>{recipe.available.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageContainer>
  )
}

