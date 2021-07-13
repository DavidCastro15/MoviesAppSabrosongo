import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewPosterPageRoutingModule } from './preview-poster-routing.module';

import { PreviewPosterPage } from './preview-poster.page';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewPosterPageRoutingModule,
    PipesModule
  ],
  declarations: [PreviewPosterPage]
})
export class PreviewPosterPageModule {}
