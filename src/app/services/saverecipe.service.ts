import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/recipe.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaveRecipeService {
  private apiUrl = 'http://localhost:3000/save-recipe';

  constructor(private http: HttpClient) {}

  saveRecipe(recipe: Recipe): Observable<any> {
    console.log(recipe);

    return this.http.post(this.apiUrl, recipe);
  }
}
