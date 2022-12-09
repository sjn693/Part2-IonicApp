//author: Sujan Gautam(23541498)
import { Component } from '@angular/core';
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  batteryLevel: number;
  plugged: boolean;

  constructor(private batteryStatus: BatteryStatus) {
      // watch change in battery status
   const subscription = this.batteryStatus.onChange().subscribe(status => {
    console.log(status.level, status.isPlugged);
    this.plugged = status.isPlugged;
    this.batteryLevel= status.level;
  });
  }

}
