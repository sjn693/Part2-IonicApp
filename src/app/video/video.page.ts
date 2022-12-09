import { Component } from '@angular/core';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';


@Component({
  selector: 'app-video',
  templateUrl: 'video.page.html',
  styleUrls: ['video.page.scss']
})
export class VideoPage {

   /**
   * userName:Ao Peng
   * Initialize video playback
   */
    constructor(private videoPlayer: VideoPlayer) {
    }
  
    /**
     * userName:Ao Peng
     * Return message after successful playback
     */
    onSuccess(){
      console.log('success');
    }
  
    /**
     * userName:Ao Peng
     * Return message after error playback
     */
    onError(){
      console.log('error');
    }
  
    /**
     * userName:Ao Peng
     * Start playing
     */
    doPlay() {
      // Playing a video.
      this.videoPlayer.play('file:///assets/movie.mp4').then(() => {
      console.log('video completed');
      }).catch(err => {
      console.log(err);
      });
    }
  
    /**
     * userName:Ao Peng
     * Stop play
     */
    doStop(){
      this.videoPlayer.close();
    }

}
