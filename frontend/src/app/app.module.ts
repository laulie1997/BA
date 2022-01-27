import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxBootstrapIconsModule, boxArrowRight, person, alarmFill} from 'ngx-bootstrap-icons';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ZeiterfassungComponent } from './seiten/zeiterfassung/zeiterfassung.component';
import { ArbeitsuebersichtComponent } from './seiten/arbeitsuebersicht/arbeitsuebersicht.component';
import { AbwesenheitComponent } from './seiten/abwesenheit/abwesenheit.component';
import { UrlaubComponent } from './seiten/urlaub/urlaub.component';
import { TeamzeitenComponent } from './seiten/teamzeiten/teamzeiten.component';
import { HomeComponent } from './seiten/home/home.component';



const icons = {
  boxArrowRight,
  person,
  alarmFill
};
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ZeiterfassungComponent,
    ArbeitsuebersichtComponent,
    AbwesenheitComponent,
    UrlaubComponent,
    TeamzeitenComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(icons),
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
