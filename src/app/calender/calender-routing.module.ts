import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderPage } from './calender.page';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';


const routes: Routes = [
  {
    path: '',
    component: CalenderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    Calendar
  ]
})
export class CalenderPageRoutingModule {}
