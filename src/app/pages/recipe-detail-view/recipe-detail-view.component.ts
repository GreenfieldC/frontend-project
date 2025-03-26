import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Recipe } from '../../shared/models/recipe.models';
import { NgFor, NgIf } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-receipe-detail-view',
  imports: [NgIf, NgFor],
  templateUrl: './recipe-detail-view.component.html',
  styleUrl: './recipe-detail-view.component.scss',
})
export class RecipeDetailViewComponent {
  allRecipes: Recipe[] = [];
  recipe: Recipe | undefined;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location // Add Location service
  ) {
    this.recipeService
      .getRecipeById(this.route.snapshot.params['id'])
      .subscribe((recipe: Recipe) => (this.recipe = recipe));
  }

  goBack(): void {
    this.location.back();
  }
}
