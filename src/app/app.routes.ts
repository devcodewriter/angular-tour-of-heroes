import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "dashboard"},
  { path: 'heroes', component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent},
  { path: "detail/:id", component: HeroDetailComponent},
];
