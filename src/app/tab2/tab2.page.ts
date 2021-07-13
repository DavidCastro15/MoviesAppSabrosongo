import { Component } from '@angular/core';
import { MDBResponse } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public token;
  public identity;
  movies

  constructor(private movieService:MoviesService,
    private route:Router,
    public  _userService: LoginService) {
      this.token = this._userService.getToken();
      this.identity = this._userService.getIdentity();
    }


  searchMovies(event:any){
    if(event.target.value){
      this.movieService.searchMovie(event.target.value).subscribe(
        (resp:MDBResponse)=>{
          this.movies = resp.results
          console.log(this.movies);
          
      
    })
  }
  }


  searchMoviesKids(event:any){
    if(event.target.value){
      this.movieService.searchMovieKids(event.target.value).subscribe(
        (resp:MDBResponse)=>{
          this.movies = resp.results
          console.log(this.movies);
          
      
    })
  }
  }
  salir(){
    localStorage.clear()
    this.route.navigateByUrl('/login')
  }
}
