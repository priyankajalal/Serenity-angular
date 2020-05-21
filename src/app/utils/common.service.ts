
import { Injectable } from '@angular/core';



@Injectable()
export class CommonService {

   getRatingText(rating){

   if(rating>= 8 )
     {
      return "VeryStrong";
     }
    else if(rating>= 6 && rating< 8 )
     {
           return "Strong";
     }
   else if(rating>= 4 && rating< 6 )
     {
           return "Neutral";
     }
    else if(rating>= 2 && rating< 4 )
     {
           return "Weak";
     }
    else
     {
           return "VeryWeak";
     }
   }

    getRsiText(value){
        let rsi_text ="Neutral";
                if (value < 20 ){

                    rsi_text='ExtremelyOversold'
                    }

                else if (value >= 20 && value <= 30){

                    rsi_text='Oversold'
                    }
                else if (value > 30 && value <= 45){

                    rsi_text='ApproachingOversold'
                    }
                else if (value > 45 && value <= 55){
                    rsi_text='Neutral'
                    }
                else if (value > 55 && value <= 70){

                    rsi_text='ApproachOverbought'
                    }
                else if (value > 70 && value <= 80){

                    rsi_text='Overbought'
                    }
                else if (value > 80){

                    rsi_text='ExtremelyOverbought'
                    }
                else {
                    rsi_text= "Neutral"
                    }


                return rsi_text;


    }
    getSeriesData(data,xColumn,yColumn,colorOnYColumnVal,colorColumn){

        let series = [];
        let categories =[]
        let ser1 = {
                     data: [],
                     name: '',
                     color: ''
                                    };
                  // only 1 series
                  for (let item of data) {
                      let xColumnValue = item[xColumn];
                      if(item["alternate_name"] != undefined)
                      {
                       categories.push(item["alternate_name"]);
                      }
                      let yVal= parseFloat(item[yColumn]); //priceChange

                      let temp1 ={color:'',y: yVal,name: xColumnValue};

                      if(colorOnYColumnVal)
                      {
                       temp1.color=yVal < 0?'red':'green';
                      }
                       else if(colorColumn && item[colorColumn]){
                        temp1.color = item[colorColumn];
                      }
                      ser1.data.push(temp1);
                  }
        series.push(ser1);
        return {"series":series,"categories":categories};

        }

        getItemArrayFromList(data,column)
        {
          let symbols =[];
                  for (let item of data)
                  {
                   symbols.push(item[column]);
                  }
          return symbols;
        }

    createSeriesData(data,valueColumn,categoryColumn,setColor){

      let series= [{name:valueColumn,data:[]}]
      return this.getAllSeriesData(data,series,categoryColumn,setColor)


    }

    getAllSeriesData(dataTable,series,categoryColumn,setColor){
           let categories =[];
                    for (let item of dataTable) {
                         categories.push(item[categoryColumn]);
                         for (let seriesItem of series)
                            {
                              let columnName = seriesItem["name"];
                              let itemVal = item[columnName]
                              let temp1 ={color:'',y:itemVal,name: item[categoryColumn]};
                              if(setColor)
                              {
                               let yVal= parseFloat(itemVal);
                               var color = yVal < 0?'red':'green';
                               temp1.color=color;
                              }
                              else if ("color" in seriesItem){
                                temp1.color=seriesItem["color"];

                              }
                              seriesItem["data"].push(temp1);
                            }
                          }
           return {"series":series,"categories":categories};
    }


   getDataMultipleSeriesFromColumns(dataTable,seriesColumn){
   let categories =[];
    let series = [];
    if(dataTable.length > 0)
    {
        categories = Object.keys(dataTable[0]);
        categories.splice(categories.indexOf(seriesColumn),1);

        for (let row of dataTable){
            let seriesItem = {"name":row[seriesColumn],"data":[]};
            for (let categoryColumn of categories){
                let name = row[seriesColumn] + "("+categoryColumn+")" ;
                seriesItem.data.push({"y":row[categoryColumn],"name": name});
            }
            series.push(seriesItem);
        }

    }

     return {"series":series,"categories":categories};
    }
}
