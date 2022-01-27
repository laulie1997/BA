import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AbwesenheitComponent} from "./seiten/abwesenheit/abwesenheit.component";
import {ArbeitsuebersichtComponent} from "./seiten/arbeitsuebersicht/arbeitsuebersicht.component";
import {TeamzeitenComponent} from "./seiten/teamzeiten/teamzeiten.component";
import {UrlaubComponent} from "./seiten/urlaub/urlaub.component";
import {ZeiterfassungComponent} from "./seiten/zeiterfassung/zeiterfassung.component";

const routes: Routes = [
  { path: 'abwesenheit', component: AbwesenheitComponent},
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
