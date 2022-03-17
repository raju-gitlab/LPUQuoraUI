import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http : HttpClient) { }
  
  APIURL = "https://localhost:44330/";
  Get(urlParam : string){
    return this.http.get(this.APIURL.toString() + urlParam,{'headers' : this.headers()});
  }

  post(urlParam : string , data : any) : Observable<any>
  {
    return this.http.post(this.APIURL.toString() + urlParam,data,{'headers' : this.headers()});
  }

  Put(urlParam : string , Data : Object)
  {
    return this.http.put(this.APIURL.toString() + urlParam,Data);
  }

  Delete(urlParam : string)
  {
    return this.http.delete(this.APIURL.toString()+ urlParam,{'headers':this.headers()});
  }

  public headers() {
    const httpHeaders = new HttpHeaders({
      'Accept':'*/*','apptype': 'Web', 'Cache-Control': 'no-cache', 'Content-Type': 'application/json; charset=utf-8'
    });

    return httpHeaders;
  };
}


// ,'UserId': UserId