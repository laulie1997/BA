import { Component, OnInit } from '@angular/core';
import { Arbeitszeit } from 'src/app/models/arbeitszeit';
import {AuthService} from "../../shared/auth.service";
import {ZeiterfassungService} from "../../shared/zeiterfassung.service";
import {Router} from "@angular/router";

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


arbeitszeit: Arbeitszeit = {
  user: '',
  datum: '',
  astart: '',
  aende: '',
  pstart: '',
  pende: '',
  taetigkeiten: ''
}


  constructor(private authService: AuthService,
              private zs : ZeiterfassungService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
  this.arbeitszeit.user = this.authService.currentUserId;
  this.arbeitszeit.datum = this.datum;
  this.arbeitszeit.astart = this.astart;
  this.arbeitszeit.aende = this.aende;
  this.arbeitszeit.pstart = this.pstart;
  this.arbeitszeit.pende = this.pende;
  this.arbeitszeit.taetigkeiten = this.taetigkeiten;
  console.log(this.arbeitszeit);
this.zs.addValue(this.arbeitszeit);
alert("Eintrag wurde hinzugefügt");
this.router.navigate(['zeiterfassung']);
  }



}
