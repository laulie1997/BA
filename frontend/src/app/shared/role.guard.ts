import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {User} from "../models/user";
import {RoleService} from "./role.service";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  user!: User[];
  constructor(private afs: AngularFirestore,
              private roleService: RoleService,
              private authService: AuthService
              ) {
    // @ts-ignore
  }
  canActivate() {
    this.roleService.getUsers().subscribe(user => {
      this.user = user;
    });

      if (JSON.stringify(this.user).includes(<string>sessionStorage.getItem('user'))) {

        console.log(this.user);
        console.log(this.authService.currentUserId);
        return true;

      }
      alert("You don't have access to this page");
      return false;

    }


}
