import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormComponent } from '../../ui/form/form.component';
import { Recipe } from '../../models/recipe.models';
import { recipes } from '../../models/recipes';

/* @Component({
  selector: 'add-receipe-dialog',
  templateUrl: './add-receipe-dialog.component.html',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElements extends AddReceipeDialogComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(AddReceipeDialogComponent);
  }
} */

@Component({
  selector: 'app-add-receipe-dialog',
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormComponent,
  ],
  standalone: true,
  templateUrl: './add-receipe-dialog.component.html',
  styleUrl: './add-receipe-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddReceipeDialogComponent implements OnInit {
  recipe: Recipe | undefined;
  recipeList: Recipe[] = [];
  dialog = inject(MatDialog);

  ngOnInit(): void {
    this.loadRecipe(1);
  }

  loadRecipe(recipeId: number): void {
    this.recipe = recipes.find((r) => r.recipeId === recipeId);
  }

  addRecipe(recipe: Recipe): void {
    localStorage.setItem('recipe', JSON.stringify(recipe));
    this.dialog.closeAll();
  }
}
