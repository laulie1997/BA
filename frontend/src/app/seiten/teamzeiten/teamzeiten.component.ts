import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ZeiterfassungService} from "../../shared/zeiterfassung.service";
import { Arbeitszeit } from 'src/app/models/arbeitszeit';

@Component({
  selector: 'app-teamzeiten',
  templateUrl: './teamzeiten.component.html',
  styleUrls: ['./teamzeiten.component.css']
})
export class TeamzeitenComponent implements OnInit {
 arbeitszeit!: Arbeitszeit[] | any;
  constructor(private zs: ZeiterfassungService) { }

  ngOnInit(): void {
this.zs.getValues()
      .subscribe( val => {
        this.arbeitszeit = val;
      });
  }

}
