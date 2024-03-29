import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {getAuth} from "@angular/fire/auth";




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null;
  user! : string| any;

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
    this.afAuth.authState.subscribe((auth =>{
      this.authState = auth;
    }))
  }

  //login(email:string, password:string){
 //  return this.afAuth.signInWithEmailAndPassword(email,password);

//  }
  logout(){
   this.afAuth.signOut().then(r => alert('You have logged out'));
   sessionStorage.removeItem('user');
   this.router.navigate(['']);
  }
  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }
  login(email: string, password: string){
    this.afAuth.signInWithEmailAndPassword(email,password).then(()=>
    {
      alert('Login successful');
      sessionStorage.setItem('user', this.currentUserId);
      this.router.navigate(['dashboard']);
    }).catch(err=> alert('Login failed: '+ err.code ))
  }
  isLoggedIn(){
    return !!sessionStorage.getItem('user');
  }
  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }
get currentUserEmail(): string {
  return (this.authState !== null) ? this.authState.email : ''
}


}
