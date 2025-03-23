import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Router } from '@angular/router';
import { Recipe } from '../../shared/models/recipe.models';
import { MatIcon } from '@angular/material/icon';
import { RecipeSearchComponent } from '../../shared/components/recipe-search/recipe-search-main/recipe-search-main.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-favorite-overview',
  imports: [NgFor, CommonModule, RecipeSearchComponent, MatIcon],
  templateUrl: './favorite-overview.component.html',
  styleUrl: './favorite-overview.component.scss',
})
export class FavoriteOverviewComponent {
  allRecipes: Recipe[] = [];
  favoriteRecipes: Set<number> = new Set();

  constructor(
    private favoriteService: FavoriteService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}
  ngOnInit() {
    this.loadFavorites();
  }

  async loadFavorites() {
    this.favoriteService.getFavorites().subscribe((favorite) => {
      this.ngZone.run(() => {
        this.allRecipes = favorite;
        this.favoriteRecipes = new Set(favorite.map((fav) => fav.recipeId));
      });
    });
  }

  onSelectRecipe(id: number) {
    this.router.navigate(['/recipes', id]);
  }

  setFilteredRecipes(filteredRecipes: Recipe[]) {
    this.allRecipes = filteredRecipes;
  }

  onToggleFavorite(recipeId: number): void {
    if (this.favoriteRecipes.has(recipeId)) {
      this.favoriteRecipes.delete(recipeId);
      this.favoriteService.deleteFavorite(recipeId).subscribe({
        next: () => {
          window.location.reload();
        },
      });
      this.cdr.detectChanges();
    }
  }

  isFavorite(recipeId: number): boolean {
    return this.favoriteRecipes.has(recipeId);
  }
}
