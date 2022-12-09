import { Component } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';

@Component({
  selector: 'app-flashlight',
  templateUrl: 'flashlight.page.html',
  styleUrls: ['flashlight.page.scss']
})


export class FlashlightPage {

  constructor(private flashlight: Flashlight) {

  
  }


    /**
   * userName:Ao Peng
   * Turn on the flashlight
   */
     doOn(){
      this.flashlight.switchOn();
    }
  
    /**
     * userName:Ao Peng
     * turn off the flashlight
     */
    doOff(){
      this.flashlight.switchOff();
    }
}
