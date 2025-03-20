import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailViewComponent } from './pages/recipe-detail-view/recipe-detail-view.component';
import { RecipesOverviewComponent } from './pages/recipes-overview/recipes-overview.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'recipes',
    component: RecipesOverviewComponent,
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailViewComponent,
  },
];
