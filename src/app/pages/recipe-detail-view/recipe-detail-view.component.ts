import { Ingredient } from './../../shared/models/recipe.models';
import { Component, NgModule } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Recipe } from '../../shared/models/recipe.models';
import { NgFor, NgIf } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgModel } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-receipe-detail-view',
  imports: [
    NgIf,
    NgFor,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './recipe-detail-view.component.html',
  styleUrl: './recipe-detail-view.component.scss',
})
export class RecipeDetailViewComponent {
  allRecipes: Recipe[] = [];
  recipe: Recipe | undefined;
  personsNumber: number = 1;
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

  getCalculatedAmount(amount: number) {
    let singleAmount = amount / (this.recipe?.personsNumber ?? 1);
    let calculatedAmount = singleAmount * this.personsNumber;
    return calculatedAmount;
  }

  increaseAmount() {
    this.personsNumber++;
  }

  decreaseAmount() {
    this.personsNumber--;
  }
}
