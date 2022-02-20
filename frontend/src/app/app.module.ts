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
import { environment } from 'src/environments/environment.prod';
import {AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { LoginComponent } from './login/login.component';
import {LoginModule} from "./models/login/login.module";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { DatePipe } from '@angular/common';
import { Ng2SearchPipeModule} from "ng2-search-filter";



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
    LoginComponent,
    DashboardComponent,

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    LoginModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule,
    Ng2SearchPipeModule



  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
