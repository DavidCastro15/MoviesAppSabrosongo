import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  session;

  admin = {
    role:'administrador'
  }
  identity ={
    role: 'invitado'
  }
  low ={
    role: 'kids'
  }
  constructor(private route:Router,
              private movieService:MoviesService) { }

  ngOnInit() {

  }

  home(){
    localStorage.setItem('identity',JSON.stringify( this.admin.role))
    this.route.navigateByUrl('/tabs/tab1')
  }

  invitado(){
    this.movieService.sessionId().subscribe(
      res => {
        console.log(res);
        this.session = res;
        localStorage.setItem('token',JSON.stringify( this.session.guest_session_id ))
        localStorage.setItem('identity',JSON.stringify( this.identity.role))
        localStorage.setItem('expirate',JSON.stringify( this.session.expires_at))

      }
    )
    
    this.route.navigateByUrl('/guest')
  }
  
  kids(){
    localStorage.setItem('identity',JSON.stringify( this.low.role))
    this.route.navigateByUrl('/tabs/tab1')
  }

}
