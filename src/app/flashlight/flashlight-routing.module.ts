import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashlightPage } from './flashlight.page';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';

const routes: Routes = [
  {
    path: '',
    component: FlashlightPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    Flashlight
  ]
})
export class FlashlightPageRoutingModule {}
