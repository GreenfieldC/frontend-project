import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormComponent } from '../../shared/components/form/form.component';
import { Recipe } from '../../shared/models/recipe.models';
import { SaveRecipeService } from '../../services/saverecipe.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-receipe',
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormComponent,
    RouterLink,
  ],
  standalone: true,
  templateUrl: './add-receipe.component.html',
  styleUrl: './add-receipe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddReceipeComponent implements OnInit {
  recipe: Recipe | undefined;
  recipeList: Recipe[] = [];

  constructor(private recipeService: SaveRecipeService) {}

  ngOnInit(): void {}

  addRecipe(recipe: Recipe): void {
    this.recipeService.saveRecipe(recipe).subscribe(
      (response) => {
        alert(response.message);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
