import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPage } from './video.page';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';

const routes: Routes = [
  {
    path: '',
    component: VideoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    VideoPlayer
  ]
})
export class VideoPageRoutingModule {}
