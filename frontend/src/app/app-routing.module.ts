import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AbwesenheitComponent} from "./seiten/abwesenheit/abwesenheit.component";
import {ArbeitsuebersichtComponent} from "./seiten/arbeitsuebersicht/arbeitsuebersicht.component";
import {TeamzeitenComponent} from "./seiten/teamzeiten/teamzeiten.component";
import {UrlaubComponent} from "./seiten/urlaub/urlaub.component";
import {ZeiterfassungComponent} from "./seiten/zeiterfassung/zeiterfassung.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'abwesenheit', component: AbwesenheitComponent,
  canActivate: [AngularFireAuthGuard]},
  { path: 'dashboard', component: DashboardComponent,
    canActivate: [AngularFireAuthGuard]},
  { path: 'arbeitsuebersicht', component: ArbeitsuebersichtComponent,
    canActivate: [AngularFireAuthGuard]},
  { path: 'teamzeiten', component: TeamzeitenComponent,
    canActivate: [AngularFireAuthGuard]},
  { path: 'urlaub', component: UrlaubComponent,
    canActivate: [AngularFireAuthGuard]},
  { path: 'zeiterfassung', component: ZeiterfassungComponent,
    canActivate: [AngularFireAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
