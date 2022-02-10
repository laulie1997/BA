import { Component, OnInit } from '@angular/core';
import { Arbeitszeit } from 'src/app/models/arbeitszeit';
import {AuthService} from "../../shared/auth.service";
import {ZeiterfassungService} from "../../shared/zeiterfassung.service";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {getAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-zeiterfassung',
  templateUrl: './zeiterfassung.component.html',
  styleUrls: ['./zeiterfassung.component.css']
})
export class ZeiterfassungComponent implements OnInit {
  datum!: any;
  astart!: string;
  aende!: string;
  pstart!: string;
  pende!: string;
  taetigkeiten!: string;
  projekt!: string;


arbeitszeit: Arbeitszeit = {
  user: '',
  user_name:'',
  datum: '',
  astart: '',
  aende: '',
  pstart: '',
  pende: '',
  taetigkeiten: '',
  projekt:''
}


  constructor(private authService: AuthService,
              private zs: ZeiterfassungService,
              private router: Router,
              private afAuth: AngularFireAuth
              ) {

  }

  ngOnInit(): void {

  }
  onSubmit(): void{
  this.arbeitszeit.user = this.authService.currentUserId;
this.arbeitszeit.user_name = this.authService.currentUserEmail;
  this.arbeitszeit.datum = this.datum;
  this.arbeitszeit.astart = this.astart;
  this.arbeitszeit.aende = this.aende;
  this.arbeitszeit.pstart = this.pstart;
  this.arbeitszeit.pende = this.pende;
  this.arbeitszeit.taetigkeiten = this.taetigkeiten;
  this.arbeitszeit.projekt = this.projekt;
  console.log(this.arbeitszeit);
this.zs.addValue(this.arbeitszeit);
alert("Eintrag wurde hinzugefügt");
this.router.navigate(['arbeitsuebersicht']);
  }



}
