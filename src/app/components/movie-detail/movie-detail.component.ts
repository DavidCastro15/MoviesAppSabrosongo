import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PeliculaDetalle, Cast } from 'src/app/interfaces/interfaces';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MoviesService } from 'src/app/services/movies.service';
import { ActionSheetController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  @Input() id;
  public token;
  public identity;
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
    public actionSheetController:ActionSheetController,
    public  _userService: LoginService) {
      this.token = this._userService.getToken();
      this.identity = this._userService.getIdentity();
     }

  ngOnInit() {
    this.moviesService.getMovieDetail(this.id).subscribe(
      resp => {
        this.movie = resp;        
    

      }
    )

    this.moviesService.getActorMovies(this.id).subscribe(
      resp => {
        this.actors = resp.cast;
        
      }
    )
  }

  regresar() {
    this.modalCtrl.dismiss();
  }
  async presentActionSheet() {
    if(this.identity ==='administrador'){
      this.moviesService.getMovieDetail(this.id).subscribe(
        resp => {
          this.movie = resp;
        }
      )
      const actionSheet = await this.actionSheetController.create({
        header: 'Pelicula',
        buttons: [ {
          text: 'Favoritos',
          icon: 'heart',
          handler: () => {
            this.storage.guardarPelicula(this.movie);
  
  
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
      });
      await actionSheet.present();
  
      const { role } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }else{
      console.log('No eres admin');
      
    }
    }
   
}
