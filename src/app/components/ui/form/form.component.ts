import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Recipe } from '../../../shared/models/recipe.models';
import { CommonModule } from '@angular/common';
import { recipes } from '../../../shared/models/recipes';

@Component({
  selector: 'app-form',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CommonModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  recipe: Recipe | undefined;
  recipeList: Recipe[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadRecipe(1);
  }

  loadRecipe(recipeId: number): void {
    this.recipe = recipes.find((r) => r.recipeId === recipeId);
  }
}
