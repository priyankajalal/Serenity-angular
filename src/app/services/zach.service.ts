import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()

export class ZachService {


  constructor (
    private http: HttpClient
  ) {}


   getZach(symbolList){
      return this.http.get(environment.baseUrl+'/symbol/model/'+symbolList.join(","));
     }
}


