import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MDBResponse, Pelicula, PeliculaDetalle } from '../interfaces/interfaces';
import { LoginService } from '../services/login.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {
 tv:Pelicula[] = [];
 public identity;
 public token;
  constructor(private movieService:MoviesService,
    private route:Router,
    private _userService:LoginService ) {
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
     }

  ngOnInit() {
    this.getTV();  
  
    console.log(  localStorage.getItem('expirate'));
    console.log(new Date().getUTCDate()+1);
    
    

  }

  salir(){
    localStorage.clear()
    this.route.navigateByUrl('/login')
  }
  getTV(){
    this.movieService.getFeatureInvitado().subscribe(
     (resp:MDBResponse)=>{
        this.tv = resp.results;
     }
    )
  }
}
