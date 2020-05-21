export class DateUtils{

  static formatDate(inputDate): string {


       if(inputDate.toString().length < 12){
         return inputDate;
       }
       else{
         let day: string = inputDate.getDate().toString();
         day = +day < 10 ? '0' + day : day;
         let month: string = (inputDate.getMonth() + 1).toString();
         month = +month < 10 ? '0' + month : month;
         let year = inputDate.getFullYear();
         return `${year}-${month}-${day}`;
     }
   }
}