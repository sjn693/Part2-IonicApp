import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashlightPage } from './flashlight.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FlashlightPageRoutingModule } from './flashlight-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FlashlightPageRoutingModule
  ],
  declarations: [FlashlightPage]
})
export class FlashlightPageModule {}
