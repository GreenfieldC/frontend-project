import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailViewComponent } from './pages/recipe-detail-view/recipe-detail-view.component';
import { RecipesOverviewComponent } from './pages/recipes-overview/recipes-overview.component';
import { FavoriteOverviewComponent } from './pages/favorite-overview/favorite-overview.component';
import {LayoutComponent} from './shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'recipes', component: RecipesOverviewComponent },
      { path: 'recipes/:id', component: RecipeDetailViewComponent },
      { path: 'favorites', component: FavoriteOverviewComponent }
    ]
  }
];
