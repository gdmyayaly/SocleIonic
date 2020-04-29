import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urllogin:string="http://localhost:8000/login";
  constructor(private http:HttpClient) { }
  loggin(data){
    return this.http.post(this.urllogin , data , {observe:'response'})
  }
  enregistrementToken(jwtToken : string){ 
    localStorage.setItem('token',jwtToken);
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
