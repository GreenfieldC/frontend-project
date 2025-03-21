import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Recipe } from '../shared/models/recipe.models';
import { Router, RouterLink } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  imports: [NgFor, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  allRecipes: Recipe[] = [];
  constructor(private recipeService: RecipeService, private router: Router) {}
  ngOnInit() {
    this.allRecipes = this.recipeService.getAllRecipes();
  }

  onSelectRecipe(id: number) {
    this.router.navigate(['/recipe', id]);
  }
}
