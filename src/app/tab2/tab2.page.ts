//author: Sujan Gautam(23541498)
import { Component, OnInit } from '@angular/core';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  batteryLevel: number;
  plugged: boolean;

  constructor(private device: Device, private batteryStatus: BatteryStatus) {
      // watch change in battery status
      const subscription = this.batteryStatus.onChange().subscribe(status => {
        console.log(status.level, status.isPlugged);
        this.plugged = status.isPlugged;
        this.batteryLevel= status.level;
      });

      this.getBattteryChange
      this.getBattteryLow
      this.getBattteryCritical
  }

  model = this.device.model;
  platform = this.device.platform;
  version = this.device.version;
  serial = this.device.serial;
  manufacturer = this.device.manufacturer;

  ngOnInit() {

  }

  getBattteryChange(status){
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
  }

  getBattteryLow(status){
    alert("Battery Level Low " + status.level + "%");
  }

  getBattteryCritical(status){
    alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
  }

}
