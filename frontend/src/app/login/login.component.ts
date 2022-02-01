import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(
  private auth: AngularFireAuth,
  private router: Router) { }

  ngOnInit(): void {

  }

  login(){
    this.auth.signInWithEmailAndPassword(this.email,this.password).then(()=>
    {
      alert('Login successful');
      this.router.navigate(['dashboard']);
    }).catch(err=> alert('Login failed: '+ err.code +''))
  }
}
