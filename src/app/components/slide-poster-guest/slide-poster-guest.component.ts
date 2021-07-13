import { Component, Input, OnInit } from '@angular/core';
import { MDBResponse, Pelicula, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { ModalController } from '@ionic/angular';
import { PreviewPosterPageModule } from 'src/app/preview-poster/preview-poster.module';
import { PreviewPosterPage } from 'src/app/preview-poster/preview-poster.page';

@Component({
  selector: 'app-slide-poster-guest',
  templateUrl: './slide-poster-guest.component.html',
  styleUrls: ['./slide-poster-guest.component.scss'],
})
export class SlidePosterGuestComponent implements OnInit {

  @Input() movies:Pelicula[] = []
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {        
  }
  
    async verDetalle(id: string | number) {
      const modal = await this.modalCtrl.create({
        component: PreviewPosterPage,
        componentProps: {
          id
        }
      });
      
      modal.present();
    }
  

}
