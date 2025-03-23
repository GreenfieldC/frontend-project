import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Recipe } from '../../shared/models/recipe.models';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { RecipeSearchComponent } from '../../shared/components/recipe-search/recipe-search-main/recipe-search-main.component';
import { MatIcon } from '@angular/material/icon';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-recipes-overview',
  imports: [NgFor, CommonModule, RecipeSearchComponent, MatIcon],
  templateUrl: './recipes-overview.component.html',
  styleUrl: './recipes-overview.component.scss',
})
export class RecipesOverviewComponent {
  allRecipes: Recipe[] = [];
  favoriteRecipes: Set<number> = new Set();

  constructor(
    private favoriteService: FavoriteService,
    private recipeService: RecipeService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.allRecipes = this.recipeService.getAllRecipes();
    this.favoriteService.getFavorites().subscribe((favorite) => {
      this.favoriteRecipes = new Set(favorite.map((fav) => fav.recipeId));
      this.cdr.markForCheck();
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
          console.log(`Recipe ${recipeId} removed from favorites.`);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error(
            `Error removing recipe ${recipeId} from favorites:`,
            err
          );
        },
      });
    } else {
      const recipeToSave = this.allRecipes.find((r) => r.recipeId === recipeId);
      if (recipeToSave) {
        this.favoriteRecipes.add(recipeId);
        this.favoriteService.saveFavorite(recipeToSave).subscribe({
          next: () => {
            console.log(`Recipe ${recipeId} added to favorites.`);
            this.cdr.detectChanges();
          },
          error: (err) => {
            console.error(`Error adding recipe ${recipeId} to favorites:`, err);
          },
        });
      }
    }
  }

  isFavorite(recipeId: number): boolean {
    return this.favoriteRecipes.has(recipeId);
  }
}
