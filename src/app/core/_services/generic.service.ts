import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  private bdd:string = 'http://pacheco.chillan.ubiobio.cl:8081/api';
  //private bdd:string = 'http://localhost:3000/api';
  constructor(private httpClient:HttpClient) { }



  public getGeneric(controller: string ,options: any): Observable<any>{
    return this.httpClient.get<any>(this.bdd + controller + options);
  }

  public postGeneric(controller: string, options: any, body:any): Observable<any>{
    return this.httpClient.post<any>(this.bdd + controller + options, body) ;
  }

  public deleteGeneric(controller: string, id: any ,options: any): Observable<any>{
    return this.httpClient.delete<any>(this.bdd + controller + id + options) ;
  }

  public putGeneric(controller: string,id: any ,options: any, body:any){
    return this.httpClient.put<any>(this.bdd + controller + id + options, body) ;
  }

  public patchGeneric(controller: string,id: any ,options: any, body:any){
    return this.httpClient.patch<any>(this.bdd + controller + id + options, body);
  }

  public postGenericFiles(controller: string, options: any, body:any): Observable<any>{
    let headers:any = new HttpHeaders();
    headers = headers.append('Content-Type', 'multipart/form-data')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data;'
      })
    };
    return this.httpClient.post<any>(this.bdd + controller + options, body, headers) ;
  }

}
