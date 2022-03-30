import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {User} from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class RoleService {
  userCollection!: AngularFirestoreCollection<User>;
  user!: Observable<User[]>;
  buchhalter!: Observable<User[]>;
  answer!: boolean;

  constructor(private afs: AngularFirestore,
              ) {

    // @ts-ignore
    this.user = this.afs.collection('users').valueChanges()//.subscribe(
    //  data => console.log(JSON.stringify(data)),
    //  error =>console.log(error)
  //  );
    // @ts-ignore
    this.buchhalter = this.afs.collection('buchhalter').valueChanges();
  }

  getUsers(){
    return this.user;
  }
}
