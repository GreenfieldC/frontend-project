import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../shared/models/recipe.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoritesUrl = 'http://localhost:3000/favorites';
  private saveFavoriteUrl = 'http://localhost:3000/save-favorite';
  private deleteFavoriteUrl = 'http://localhost:3000/delete-favorite';

  constructor(private http: HttpClient) {}

  getFavorites(): Observable<any[]> {
    return this.http.get<any[]>(this.favoritesUrl);
  }

  saveFavorite(favorite: any): Observable<void> {
    return this.http.post<void>(this.saveFavoriteUrl, favorite);
  }

  deleteFavorite(recipeId: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteFavoriteUrl}/${recipeId}`);
  }
}
