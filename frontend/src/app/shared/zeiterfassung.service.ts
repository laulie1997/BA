import { Injectable } from '@angular/core';
import { Arbeitszeit } from '../models/arbeitszeit';
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, Query, } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ZeiterfassungService {
  arbeitszeit!: Observable<Arbeitszeit[]>;
  arbeitszeitCollection!: AngularFirestoreCollection<Arbeitszeit>;
arbeitszeitDoc!: AngularFirestoreDocument<Arbeitszeit>;


  constructor(private afs: AngularFirestore) {
  this.arbeitszeitCollection = this.afs.collection('arbeitszeit');
    // @ts-ignore
    this.arbeitszeit = this.afs.collection('arbeitszeit').valueChanges();

  }

  getValues() {
    return this.arbeitszeit;
  }

  addValue(arbeitszeit:Arbeitszeit){
    this.arbeitszeitCollection.add(arbeitszeit);
  }

  deleteValue(arbeitszeit: Arbeitszeit){
    this.arbeitszeitDoc= this.afs.doc(`arbeitszeit/${arbeitszeit.id}`);
    this.arbeitszeitDoc.delete();
  }
 updateValue(arbeitszeit:Arbeitszeit){
   this.arbeitszeitDoc= this.afs.doc(`arbeitszeit/${arbeitszeit.id}`);
   this.arbeitszeitDoc.update(arbeitszeit);
 }



}
