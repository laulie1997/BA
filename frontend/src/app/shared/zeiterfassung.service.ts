import { Injectable } from '@angular/core';
import { Arbeitszeit } from '../models/arbeitszeit';
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, Query, } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ZeiterfassungService {
  arbeitszeit!: Observable<Arbeitszeit>;
  arbeitszeitCollection!: AngularFirestoreCollection<Arbeitszeit>;



  constructor(private afs: AngularFirestore) {
    this.arbeitszeitCollection = this.afs.collection('arbeitszeit');
    // @ts-ignore
    this.arbeitszeit = this.afs.collection('arbeitszeit').valueChanges();
  }

  getValues() {
    return this.arbeitszeit;
  }

  addValue(arbeitszeit: Arbeitszeit) {
    this.arbeitszeitCollection.add(arbeitszeit);
  }

}
