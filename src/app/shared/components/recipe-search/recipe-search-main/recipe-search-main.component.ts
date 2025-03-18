import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RecipeSearchCardComponent } from '../recipe-search-card/recipe-search-card.component';
import { Recipe, DietType } from '../../../models/recipe.models';
import { recipes } from '../../../models/recipes';
import { LocalStorageService } from '../../../services/local-storage.service';


@Component({
  selector: 'app-recipe-search',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RecipeSearchCardComponent,
  ],
  templateUrl: './recipe-search-main.component.html',
  styleUrl: './recipe-search-main.component.scss',
})
export class RecipeSearchComponent implements OnInit {
  public recipes: Recipe[] = recipes;
  public form: FormGroup = new FormGroup({});
  public dietTypes: DietType[] = Object.values(DietType);

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.filterRecipesOnFormChange();
    this.patchFormValue();
  }

  private initForm(): void {
    this.form = this.fb.group({
      dietTypes: [''],
    });
  }

  private filterRecipesOnFormChange(): void {
    this.form.valueChanges.subscribe((value) => {
      this.recipes = recipes.filter((recipe) => {
        this.localStorageService.saveSelectedDietTypes(value.dietTypes);

        if (!value.dietTypes || value.dietTypes.length === 0) {
          return true;
        }
        return value.dietTypes.includes(recipe.dietType);
      });
    });
  }

  private patchFormValue(): void {
    const savedDietTypes = this.localStorageService.loadSelectedDietTypes();
    this.form.patchValue({ dietTypes: savedDietTypes });
  }
}
