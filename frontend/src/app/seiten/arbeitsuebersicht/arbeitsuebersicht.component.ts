import {Component, OnInit} from '@angular/core';
import {Arbeitszeit} from 'src/app/models/arbeitszeit';
import {ZeiterfassungService} from "../../shared/zeiterfassung.service";
import {AuthService} from "../../shared/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-arbeitsuebersicht',
  templateUrl: './arbeitsuebersicht.component.html',
  styleUrls: ['./arbeitsuebersicht.component.css']
})
export class ArbeitsuebersichtComponent implements OnInit {
arbeitszeit!: Arbeitszeit[] |any;
  constructor(private zs: ZeiterfassungService,
              private authService: AuthService,
             private afs: AngularFirestore) { }

  ngOnInit(): void {
 this.afs.collection('arbeitszeit',
   ref => ref.where("user", "==", localStorage.getItem('user'))).valueChanges()
   .subscribe( val => {
     this.arbeitszeit = val;
   });


     //console.log(JSON.stringify(values));
    // console.log(localStorage.getItem('user'));


  }


}
