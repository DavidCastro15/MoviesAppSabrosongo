import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PeliculaDetalle, Cast } from 'src/app/interfaces/interfaces';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MoviesService } from 'src/app/services/movies.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-preview-poster',
  templateUrl: './preview-poster.page.html',
  styleUrls: ['./preview-poster.page.scss'],
})
export class PreviewPosterPage implements OnInit {

  @Input() id;

  movie: PeliculaDetalle = {};
  actors: Cast[] = [];
  oculto: number = 150;
  estrella: string = 'star-outline';

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: 0
  };

  constructor(private moviesService: MoviesService,
    private modalCtrl: ModalController,
    public storage:LocalStorageService,
    public actionSheetController:ActionSheetController) {
     }

  ngOnInit() {
    this.moviesService.getTvDetail(this.id).subscribe(
      resp => {
        this.movie = resp;
        
      }
    )

    this.moviesService.getActorTv(this.id).subscribe(
      resp => {
        this.actors = resp.cast;        
      }
    )
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

}
