import {Component, OnInit} from '@angular/core';
import {Arbeitszeit} from 'src/app/models/arbeitszeit';
import {ZeiterfassungService} from "../../shared/zeiterfassung.service";
import {AuthService} from "../../shared/auth.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";


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
   ref => ref.where("user", "==", localStorage.getItem('user'))).snapshotChanges()
   .pipe(map(snaps =>{
     return snaps.map(a=> {
       const data = a.payload.doc.data() as Arbeitszeit;
       data.id = a.payload.doc.id;
       return data;
     })
   }))
   .subscribe( val => {
     this.arbeitszeit = val;
   });
  }

deleteValue(event: Event, arbeitszeit:Arbeitszeit){
    if (confirm("Soll dieser Eintrag gelöscht werden?")) {
      this.zs.deleteValue(arbeitszeit);
    }
}
}
