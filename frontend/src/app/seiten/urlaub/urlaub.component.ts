import { Component, OnInit } from '@angular/core';
import { Urlaub } from 'src/app/models/urlaub';
import {AuthService} from "../../shared/auth.service";
import {UrlaubService} from "../../shared/urlaub.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-urlaub',
  templateUrl: './urlaub.component.html',
  styleUrls: ['./urlaub.component.css']
})
export class UrlaubComponent implements OnInit {
vorname!: string;
nachname!: string;
start!: string;
ende!: string;

urlaub: Urlaub ={
  vorname: '',
  nachname: '',
  start: '',
  ende:''
};
  constructor(private authService: AuthService,
              private us: UrlaubService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    this.urlaub.vorname = this.vorname;
    this.urlaub.nachname = this.nachname;
    this.urlaub.start = this.start;
    this.urlaub.ende = this.ende;
    this.us.addValue(this.urlaub);
    this.router.navigate(['dashboard']);
  }


}
