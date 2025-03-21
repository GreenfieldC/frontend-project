import { Injectable } from '@angular/core';
import { recipes } from '../shared/models/recipes';
import { Recipe } from '../shared/models/recipe.models';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  getAllRecipes() {
    return recipes;
  }

  getRecipeById(id: number): Recipe {
    const recipe = recipes.find((recipe) => recipe.recipeId == id);
    if (!recipe) {
      throw new Error(`Recipe with id ${id} not found`);
    }
    return recipe;
  }
}
