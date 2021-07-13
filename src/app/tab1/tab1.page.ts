import { Component, OnInit } from '@angular/core';
import { MDBResponse, Pelicula, PeliculaDetalle } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  moviesKids;
  movies;
  popularMovies: Pelicula[] = [];
  public token;
  public identity;
  
  constructor(private movieService:MoviesService,
    public toastController: ToastController,
    public  _userService: LoginService ,
    private route:Router) {
      this.token = this._userService.getToken();
      this.identity = this._userService.getIdentity();
    }

  ngOnInit():void{
    this.movieService.getMoviesKids().subscribe(
      (resp:MDBResponse) =>{
        this.moviesKids = resp.results
        console.log(resp);
      }
    )

    this.movieService.getFeature().subscribe( (resp:MDBResponse) =>{
    this.movies = resp.results
    });
    
    this.getPopulares();
    
  }
  salir(){
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
  cargarMas(){
    this.getPopulares();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  getPopulares(){
    this.movieService.getPopulares().subscribe((resp:MDBResponse)=>{
      const temp = [...this.popularMovies, ...resp.results]
      this.popularMovies = temp;
    }, error =>{
    
      this.presentToast(`No hay mas peliculas`) 
    })
  
  }
}
