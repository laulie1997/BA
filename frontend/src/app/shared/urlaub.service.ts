import { Injectable } from '@angular/core';
import { Urlaub } from '../models/urlaub';
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument,  } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UrlaubService {
urlaub!: Observable<Urlaub>;
urlaubCollection!: AngularFirestoreCollection<Urlaub>;
  today = new Date().toISOString().toLocaleString().substring(0,10);

  constructor(private afs: AngularFirestore) {
    this.urlaubCollection = this.afs.collection('urlaub');
    // @ts-ignore
    this.urlaub = this.afs.collection('urlaub', ref =>
    ref.where("ende", ">", this.today)).valueChanges();
  }

  addValue(urlaub: Urlaub){
    this.urlaubCollection.add(urlaub);
  }
  getValues() {
    return this.urlaub;
  }
}
