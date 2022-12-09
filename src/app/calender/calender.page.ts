// Modified by Sujan Gautam(23541498)
import { Component } from '@angular/core';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';


@Component({
  selector: 'app-calender',
  templateUrl: 'calender.page.html',
  styleUrls: ['calender.page.scss']
})
export class CalenderPage {

  constructor(private calendar: Calendar) {
   
   }

 //创建并打开
 getcalender(){
    
  this.calendar.createCalendar('MyCalendar').then(
    (msg) => { console.log(msg);},
    (err) => { console.log(err);}
  );

  this.calendar.openCalendar(new Date()).then(
    (msg) => { console.log(msg);},
    (err) => { console.log(err);}
  );
}
 

}
