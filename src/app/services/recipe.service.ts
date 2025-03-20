import { DietType, Ingredient } from './../shared/models/recipe.models';
import { Injectable } from '@angular/core';
import { recipes } from '../shared/models/recipes';
import { Recipe } from '../shared/models/recipe.models';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  getAllRecipes() {
    return recipes;
  }
  getRecipeById(id: number) {
    return recipes.find((recipe) => recipe.recipeId == id);
  }
}
