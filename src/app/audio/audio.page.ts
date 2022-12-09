import { Component } from '@angular/core';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';


@Component({
  selector: 'app-audio',
  templateUrl: 'audio.page.html',
  styleUrls: ['audio.page.scss']
})
export class AudioPage {

  /**
   * userName:Ao Peng
   * Initialize audio playback
   */
   constructor(private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('uniqueId1', 'assets/music.mp3').then(this.onSuccess, this.onError);
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
    this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));

  }

  /**
   * userName:Ao Peng
   * Stop play
   */
  doStop(){
    this.nativeAudio.stop('uniqueId1').then(this.onSuccess,this.onError);
  }

}
