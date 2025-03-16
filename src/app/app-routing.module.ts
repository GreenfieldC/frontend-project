import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './shared/components/layout/layout.component';
import {LandingPageComponent} from './shared/components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: LandingPageComponent }
    //  { path: 'recipes', component: RecipesComponent },
    //  { path: 'favorites', component: FavoritesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
