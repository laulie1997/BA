import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {AuthService} from "../shared/auth.service";

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
  private router: Router,
  private authService: AuthService
 ) { }

  ngOnInit(): void {

  }

  login(){
this.authService.login(this.email, this.password);
  }


}
