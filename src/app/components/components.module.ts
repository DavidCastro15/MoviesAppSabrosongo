import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideShowBackdropComponent } from './slide-show-backdrop/slide-show-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideShowParesComponent } from './slide-show-pares/slide-show-pares.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PopoverQrComponent } from './popover-qr/popover-qr.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SlidePosterGuestComponent } from './slide-poster-guest/slide-poster-guest.component';
import { SlideShowGuestComponent } from './slide-show-guest/slide-show-guest.component';
import { GuestComponent } from './guest/guest.component';


@NgModule({
  declarations: [
    SlideShowBackdropComponent,
    SlideshowPosterComponent,
    SlideShowParesComponent,
    MovieDetailComponent,
    PopoverQrComponent,
    SlidePosterGuestComponent,
    SlideShowGuestComponent,
    GuestComponent
    
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    NgxQRCodeModule
  ],
  exports: [
    SlideShowBackdropComponent,
    SlideshowPosterComponent,
    SlideShowParesComponent,
    MovieDetailComponent,
    PopoverQrComponent,
    SlidePosterGuestComponent,
    SlideShowGuestComponent,
    GuestComponent
    
  ]
})
export class ComponentsModule { }
