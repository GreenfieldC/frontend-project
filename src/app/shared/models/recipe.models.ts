export interface Recipe {
  title: string;
  ingredients: Ingredient[];
  personsNumber: number;
  steps: string[];
  recipeId: number; // for routing
  category: RecipeCategory[]; // several categories possible
  dietType: DietType;
  preparationTime: number; // in minutes
  imageUrl?: string;
}

export interface Ingredient {
  amount: number;
  unit: string;
  name: string;
}

export enum RecipeCategory {
  Breakfast = 'Frühstück',
  MainCourse = 'Hauptgericht',
  SideDish = 'Beilage',
  Dessert = 'Nachspeise',
  Snack = 'Snack',
  Beverage = 'Getränk',
  Other = 'Sonstiges',
}

export enum DietType {
  Omnivore = 'Vollkost',
  Vegetarian = 'Vegetarisch',
  Vegan = 'Vegan',
  GlutenFree = 'Glutenfrei',
  DairyFree = 'Laktosefrei',
  NutFree = 'Nussfrei',
  Paleo = 'Paleo',
  Keto = 'Keto',
  Halal = 'Halal',
  Kosher = 'Koscher',
}
