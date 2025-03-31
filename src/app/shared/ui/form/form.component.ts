import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SaveRecipeService } from '../../../services/saverecipe.service';
import { DietType, RecipeCategory } from '../../models/recipe.models';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
  ],
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  recipeForm: FormGroup;
  recipeCategories = Object.values(RecipeCategory);
  dietTypes = Object.values(DietType);

  constructor(
    private fb: FormBuilder,
    private saveRecipeService: SaveRecipeService,
    private router: Router
  ) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      personsNumber: [1, [Validators.required, Validators.min(1)]],
      preparationTime: [0, [Validators.required, Validators.min(1)]],
      imageUrl: [''],
      category: [[]],
      dietType: [''],
      ingredients: this.fb.array([]),
      steps: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get steps(): FormArray {
    return this.recipeForm.get('steps') as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        amount: [0, Validators.required],
        unit: ['', Validators.required],
        name: ['', Validators.required],
      })
    );
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  addStep(): void {
    this.steps.push(this.fb.control('', Validators.required));
  }

  removeStep(index: number): void {
    this.steps.removeAt(index);
  }

  onSubmit(): void {
    if (this.recipeForm.valid) {
      const recipe = this.recipeForm.value;
      this.saveRecipeService.saveRecipe(recipe).subscribe(
        (response) => {
          console.log('Recipe saved successfully:', response);
          this.recipeForm.reset();
        },
        (error) => {
          console.error('Error saving recipe:', error);
        }
      );
    }
    this.router.navigate(['/recipes']);
  }
}
