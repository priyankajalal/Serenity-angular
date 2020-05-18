import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()

export class PortfolioService {


  constructor (
    private http: HttpClient
  ) {}


    editPortfolio (newPortfolio)  {
     return this.http.post(environment.baseUrl+'/modelportfolio',newPortfolio);
     }

  saveTransaction(transactions,portfolioId,action,type) {
     let transactionData ={"action":action,"type":type,"rows":transactions};
     let bodyString = JSON.stringify(transactionData);
     return this.http.post(environment.baseUrl+'/modelportfolio/'+portfolioId,transactionData);
  }

  ImportTransaction(snapShotPortfolio) {
       return this.http.post(environment.baseUrl+'/modelportfolio',snapShotPortfolio);
    }
   AddCash(portfolioId,cashData) {
         return this.http.post(environment.baseUrl+'/modelportfolio/'+portfolioId,cashData);
  }
}


