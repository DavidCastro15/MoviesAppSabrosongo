import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { LoginService } from 'src/app/services/login.service';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';


@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  public token;
  public identity;
  @Input() movies : Pelicula[] = [];
  constructor(private modalCtrl: ModalController,
    public  _userService: LoginService) 
    {
      this.token = this._userService.getToken();
      this.identity = this._userService.getIdentity();
     }
 
  slideOpts = {
    slidesPerView: 3.3,
    freeMode:true
    }

  ngOnInit() {
    
  }
  async verDetalle(id: string | number) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailComponent,
      componentProps: {
        id
      }
    });
    
    modal.present();
  }
 
  
}
