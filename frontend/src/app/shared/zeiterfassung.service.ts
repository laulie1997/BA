import { Injectable } from '@angular/core';
import { Arbeitszeit } from '../models/arbeitszeit';
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, Query, } from "@angular/fire/compat/firestore";
import {collection, getFirestore, query, where} from "@angular/fire/firestore";
import {get} from "@angular/fire/database";
import {map} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class ZeiterfassungService {
  arbeitszeit!: Observable<Arbeitszeit>;
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

  addValue(arbeitszeit: Arbeitszeit) {
    this.arbeitszeitCollection.add(arbeitszeit);
  }

  getIDValue(): Observable<any> {
    return this.afs.collection('arbeitszeit',
      ref => ref.where("user", "array-contains", localStorage.getItem('user'))).valueChanges();
  }
}
