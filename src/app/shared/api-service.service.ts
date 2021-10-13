import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }
  getAllData(url:any){
    return this.http.get(url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
