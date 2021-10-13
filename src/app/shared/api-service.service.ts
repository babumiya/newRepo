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
  postData(data:any,url:any){
    return this.http.get(url,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateData(data:any,url:any,id:any){
    return this.http.get(url+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteData(url:any,id:any){
    return this.http.get(url+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
