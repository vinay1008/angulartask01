import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  dataurl = 'https://1.api.fy23ey05.careers.ifelsecloud.com/';
  constructor(private http : HttpClient) { }


  getdata(){
    return this.http.get(this.dataurl)
  }
}
