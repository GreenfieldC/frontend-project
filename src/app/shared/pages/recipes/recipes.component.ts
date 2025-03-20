import { Component } from '@angular/core';
import { RecipeSearchComponent } from '../../components/recipe-search/recipe-search-main/recipe-search-main.component';


@Component({
  selector: 'app-recipes',
  imports: [RecipeSearchComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  standalone: true
})
export class RecipesComponent {

}
