import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioPage } from './audio.page';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';


const routes: Routes = [
  {
    path: '',
    component: AudioPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    NativeAudio
  ]
})
export class AudioPageRoutingModule {}
