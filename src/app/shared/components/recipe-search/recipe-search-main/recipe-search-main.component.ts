import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
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
import { LocalStorageService } from '../../../../services/local-storage.service';
import { Router } from '@angular/router';
import { FavoriteService } from '../../../../services/favorite.service';

@Component({
  selector: 'app-recipe-search',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './recipe-search-main.component.html',
  styleUrl: './recipe-search-main.component.scss',
})
export class RecipeSearchComponent implements OnInit {
  @Input({ required: true })
  public recipes: Recipe[] = [];

  @Output()
  filteredRecipes = new EventEmitter<Recipe[]>();

  public form: FormGroup = new FormGroup({});
  public dietTypes: DietType[] = Object.values(DietType);
  ingredients: string[] = [];

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private router: Router,
    private favoriteService: FavoriteService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllIngredientNames();
    this.setAllIngredients();
    this.filterRecipesOnFormChange();
    this.patchFormValue();
  }

  private initForm(): void {
    this.form = this.fb.group({
      dietTypes: [''],
      ingredients: [''],
    });
  }

  private loadRecipesBasedOnPath(): void {
    const currentPath = this.router.url;
    if (currentPath.includes('/recipes')) {
      this.recipes = recipes;
      this.filteredRecipes.emit(this.recipes);
      this.cdr.detectChanges();
    } else if (currentPath.includes('/favorites')) {
      this.favoriteService.getFavorites().subscribe((data) => {
        this.recipes = data;
        this.filteredRecipes.emit(this.recipes);
        this.cdr.detectChanges();
      });
    }
  }

  //#region Filter According to Diet Types

  private filterRecipesOnFormChange(): void {
    this.form.valueChanges.subscribe((value) => {
      const currentPath = this.router.url;
      let sourceRecipes = this.recipes;

      if (currentPath.includes('/favorites')) {
        sourceRecipes = this.recipes;
      } else if (currentPath.includes('/recipes')) {
        sourceRecipes = recipes;
      }

      const noDietTypeSelected =
        !value.dietTypes || value.dietTypes.length === 0;
      const noIngredientSelected =
        !value.ingredients || value.ingredients.length === 0;

      if (noDietTypeSelected && noIngredientSelected) {
        this.loadRecipesBasedOnPath();
      } else {
        this.recipes = sourceRecipes.filter((recipe) => {
          const matchesDietType =
            noDietTypeSelected || value.dietTypes.includes(recipe.dietType);
          const matchesIngredients =
            noIngredientSelected ||
            recipe.ingredients.some((ingredient) =>
              value.ingredients.some((inputIngredient: string) =>
                ingredient.name
                  .toLowerCase()
                  .startsWith(inputIngredient.toLowerCase())
              )
            );

          return matchesDietType && matchesIngredients;
        });

        this.filteredRecipes.emit(this.recipes);
        this.cdr.detectChanges();
      }

      this.localStorageService.saveSelectedDietTypes(value.dietTypes);
    });
  }

  private patchFormValue(): void {
    const savedDietTypes = this.localStorageService.loadSelectedDietTypes();
    this.form.patchValue({ dietTypes: savedDietTypes });
  }

  //#region Filter According to Ingredients

  cleanIngredientName(name: string): string {
    name = name.replace(/\(.*?\)/g, ''); // Entferne (Inhalt in Klammern)
    name = name.split(',')[0];
    return name.trim();
  }

  private getAllIngredientNames(): string[] {
    return [
      ...new Set(
        recipes.flatMap((recipe) =>
          recipe.ingredients.map((ingredient) =>
            this.cleanIngredientName(ingredient.name)
          )
        )
      ),
    ];
  }

  private setAllIngredients(): void {
    this.ingredients = this.getAllIngredientNames();
  }
}
