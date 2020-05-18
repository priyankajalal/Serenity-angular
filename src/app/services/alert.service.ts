import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()

export class AlertService {


  constructor (
    private http: HttpClient
  ) {}


  getAlert(symbolList){


    return this.http.get(environment.baseUrl+'/techAlerts/'+symbolList.join(","));

  }

}
