import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const headers = new HttpHeaders({
  'Accept' :  'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class ServicioService {


 
API_URI="http://localhost:8080/inicio";

   //return this.http.get(`${this.API_URI}`,{headers, responseType:'json'})       

  
constructor(private http:HttpClient) { }

getPeronas(){ 
  return this.http.get(`${this.API_URI}`)
  
}


createPeronas(P:any){ 
  return this.http.post(`${this.API_URI}`,P)
  
}
}
