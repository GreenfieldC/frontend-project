import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Recipe } from '../../shared/models/recipe.models';
import { NgFor, NgIf } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';

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
    private router: Router
  ) {
    this.recipe = this.recipeService.getRecipeById(
      this.route.snapshot.params['id']
    );
  }

  onBackClick() {
    this.router.navigate(['recipes']);
  }
}
