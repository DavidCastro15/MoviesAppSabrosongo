import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { ExploreContainerComponent } from './explore-container.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [ CommonModule,NgxQRCodeModule, FormsModule, IonicModule,PipesModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
