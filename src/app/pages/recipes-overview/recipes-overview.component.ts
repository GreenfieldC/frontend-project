import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Recipe } from '../../shared/models/recipe.models';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes-overview',
  imports: [NgFor, CommonModule],
  templateUrl: './recipes-overview.component.html',
  styleUrl: './recipes-overview.component.scss',
})
export class RecipesOverviewComponent {
  allRecipes: Recipe[] = [];
  constructor(private recipeService: RecipeService, private router: Router) {}
  ngOnInit() {
    this.allRecipes = this.recipeService.getAllRecipes();
    console.log(this.allRecipes);
  }

  onSelectRecipe(id: number) {
    this.router.navigate(['/recipes', id]);
  }
}
