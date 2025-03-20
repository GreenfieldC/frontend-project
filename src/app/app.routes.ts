import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { RecipesComponent } from './shared/pages/recipes/recipes.component';

export const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
        // { path: '', component: LandingPageComponent }
       { path: 'recipes', component: RecipesComponent },
      //  { path: 'favorites', component: FavoritesComponent }
      ]
    }
];
