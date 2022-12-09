//author: Sujan Gautam(23541498)
import { Component, OnInit } from '@angular/core';
import {LoadingController} from "@ionic/angular";
import { OCR, OCRSourceType } from '@awesome-cordova-plugins/ocr/ngx';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
import { OCRResult } from '@awesome-cordova-plugins/ocr';
declare var Tesseract;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  url:string="../assets/image.jpeg";
  text: string = "";
  constructor(private loader:LoadingController, private tts: TextToSpeechAdvanced, private ocr: OCR) {}

  ngOnInit() {
    this.getocrText
  }

  getocrText(){

    this.ocr.recText(OCRSourceType.NORMFILEURL, "file://src/assets/image.jpeg")
  .then((res: OCRResult) => console.log(JSON.stringify(res)))
  .catch((error: any) => console.error(error));
  }

  speak(){
    this.tts.speak(this.text)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
  }

  getTextFromImg(){

    this.loader.create({
      message:"Please wait.."
    }).then((ele)=>{
      ele.present();
    

    Tesseract.recognize(this.url,'eng').then((res)=>{
      ele.dismiss();
      this.text = res.text;
      alert(res.text)
      console.log(this.text);
      console.log(res);
    },(err)=>{
      ele.dismiss();
      alert(err);
    })

    })
  }

}
