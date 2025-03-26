import { Injectable } from '@angular/core';
import { recipes } from '../shared/models/recipes';
import { Recipe } from '../shared/models/recipe.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipesUrl = 'http://localhost:3000/recipes';
  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }

  getRecipeById(id: number): Recipe {
    const recipe = recipes.find((recipe) => recipe.recipeId == id);
    if (!recipe) {
      throw new Error(`Recipe with id ${id} not found`);
    }
    return recipe;
  }
}
