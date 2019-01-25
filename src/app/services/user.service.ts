import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Http } from '@angular/http';


@Injectable({
  providedIn: "root"
})
export class UserService {
  API_BASE_URL:string= "http://localhost:3000/api/";
  constructor(private http: Http) {}

  saveUser( userData, imagFile ) {
    const imageObj = { userData , imagFile};
    return this.http
      .post("http://localhost:3000/api/" + "auth/register", userData)
      .pipe(
        map(response => {
          let data = response;
          return data;
        })
      );
  }

  login( user  ){
      return this.http.post( "http://localhost:3000/api/" + 'auth/login' , user  ).pipe(
        map(response=>{
         return response.json();
        })
      )
  }
 
 
}
