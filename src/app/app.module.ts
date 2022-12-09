import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OCR } from '@awesome-cordova-plugins/ocr/ngx';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    OCR,
    TextToSpeechAdvanced,
    Device,
    BatteryStatus,
    { provide: RouteReuseStrategy,  useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
