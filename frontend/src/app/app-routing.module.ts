import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AbwesenheitComponent} from "./seiten/abwesenheit/abwesenheit.component";
import {ArbeitsuebersichtComponent} from "./seiten/arbeitsuebersicht/arbeitsuebersicht.component";
import {TeamzeitenComponent} from "./seiten/teamzeiten/teamzeiten.component";
import {UrlaubComponent} from "./seiten/urlaub/urlaub.component";
import {ZeiterfassungComponent} from "./seiten/zeiterfassung/zeiterfassung.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'abwesenheit', component: AbwesenheitComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'arbeitsuebersicht', component: ArbeitsuebersichtComponent},
  { path: 'teamzeiten', component: TeamzeitenComponent},
  { path: 'urlaub', component: UrlaubComponent},
  { path: 'zeiterfassung', component: ZeiterfassungComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
