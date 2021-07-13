import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GuestPageRoutingModule } from './guest-routing.module';
import { GuestPage } from './guest.page';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestPageRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [
    GuestPage,

  ]
})
export class GuestPageModule {}
