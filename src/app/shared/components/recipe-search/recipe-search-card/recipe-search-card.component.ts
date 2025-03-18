import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Recipe } from '../../../models/recipe.models';


@Component({
  selector: 'app-recipe-search-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './recipe-search-card.component.html',
  styleUrl: './recipe-search-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeSearchCardComponent {
  @Input({required: true}) recipe: Recipe = {} as Recipe;
}
