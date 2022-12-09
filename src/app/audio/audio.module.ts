import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AudioPage } from './audio.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AudioPageRoutingModule } from './audio-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AudioPageRoutingModule
  ],
  declarations: [AudioPage]
})
export class AudioPageModule {}
