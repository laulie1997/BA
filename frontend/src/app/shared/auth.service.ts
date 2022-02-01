import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) { }

  //login(email:string, password:string){
 //  return this.afAuth.signInWithEmailAndPassword(email,password);

//  }
  logout(){
   this.afAuth.signOut().then(r => alert('You have logged out'));
   localStorage.removeItem('user');
   this.router.navigate(['']);
  }
  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }
  login(email: string, password: string){
    this.afAuth.signInWithEmailAndPassword(email,password).then(()=>
    {
      alert('Login successful');
      localStorage.setItem('user', 'user');
      this.router.navigate(['dashboard']);
    }).catch(err=> alert('Login failed: '+ err.code ))
  }

}
