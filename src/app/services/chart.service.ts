import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable()

export class ChartService {


  constructor (
    private http: HttpClient
  ) {}


    getChartData(listSymbols){
       let symbols=listSymbols.join(",")
        return this.http.get(environment.baseUrl+'/historical/'+symbols);
    }

}


