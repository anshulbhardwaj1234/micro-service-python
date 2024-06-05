import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router)

  private userrole:string = "viewer"
  private JWT_Token:any = "viewer"
  private user_id:string =""

  private AllowedUserRoles = [
    {"role":"admin","access":["all"]},
    {"role":"contributor","access":["home","dashboard","marketMood","Subscription page"]},
    {"role":"viewer","access":"home,register"},
  ]
  constructor(private http: HttpClient) { }

  user_role(){
    return this.userrole
  }

  hasAccess(path: string): boolean {
    const allowedRole = this.AllowedUserRoles.find(role => role.role === this.user_role());
    if (allowedRole) {
      return allowedRole.access.includes(path) || allowedRole.role === "admin";
      // return true
    } else {
      return false;
    }
  }

  isverfied(){
    if(this.user_role() == 'viewer'){
      return false
    }
    return true
  }

  verify(username:string){
      this.user_id = username
      this.userrole='admin'
  }

  removerUser(){
    this.userrole = 'viewer'
    this.router.navigate(['/home'])
    
  }

  getJWT(){
    return this.JWT_Token
  }

  SetJWT(JWt: Object){
    this.JWT_Token = JWt;
  }
}
