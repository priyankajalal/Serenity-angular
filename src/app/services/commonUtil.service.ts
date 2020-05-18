import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()

export class CommonUtilService {


  constructor (
    private http: HttpClient
  ) {}

  getZacksRatingBackground(value) {
             let styles = {
                     'color': '#fff' ,
                     'text-shadow': '0 -1px 1px rgba(0,0,0,.9)',
                     'background-color':value >=4 ? '#e10d0d':  value ==3 ? 'grey' :'#00ad13',
                     'width': '18px',
                     'font-weight': '600',
                     'border': value >=4 ? '1px solid #b50101' : '1px solid #028d11',
                     'border-radius': '3px',
                     'line-height': 1.4,
                     'margin-left':'35%'
                   };
                   return styles;
    }



  getZacksToolTip(){
          return "The RIAPro Rank rates stocks in terms of their expected price performance over the next three to six months.The ranking system uses a quantitative model based on trends in estimate revisions and EPS surprises.Stocks are ranked from 1 to 5, with a <span style='color:green;font-weight:bold;'>1</span> being the best rank <span style='color:green;'>(strong buy)</span>, and a <span style='color:red;font-weight:bold;'>5</span> being the worst <span style='color:red;'>(strong sell)</span>."
        }

  getMohanramToolTip(){
          return "Scored <span style='color:red;font-weight:bold;'>0</span> <span style='color:red;'>(Worst)</span>) through <span style='color:green;font-weight:bold;'>8</span> <span style='color:green;'>(Best)</span>. Uses 8 factors to determine a company's financial strength in earnings and cash flow profitability, naive extrapolation and accounting conservatism."
  }

  getPiotroskiToolTip(){
          return "Scored <span style='color:red;font-weight:bold;'>0</span> <span style='color:red;'>(Worst)</span> through <span style='color:green;font-weight:bold;'>8</span> <span style='color:green;'>(Best)</span>. Uses 8 factors to determine a company's financial strength in profitability, financial leverage and operating efficiency."
  }

  getBulkAddToolTip(){
        return "Use this button to add list of symbols on the go.<br></br><span style='color:red;font-weight:bold;'>important!</span> <span style='color:#424242;'> Always add valid symbols separated by commas.</span> "
  }

  getImportCsvToolTip(){
          return "Use this button to import a CSV File.<br></br><span style='color:red;font-weight:bold;'>important!</span><span style='color:#424242;'>The file should have columns Symbol, Quantity and Price seperated by comma. </span> "
    }
    appendLeadingZeroes(n){
      if(n <= 9){
        return "0" + n;
      }
      return n
    }

  getDateInStrFormat(date){
   return  date.getFullYear() + '-' + this.appendLeadingZeroes(date.getMonth() + 1) + '-' + this.appendLeadingZeroes(date.getDate());
  }

}