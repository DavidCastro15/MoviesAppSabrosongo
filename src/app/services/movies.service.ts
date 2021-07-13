import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Q from 'q';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MDBResponse, PeliculaDetalle,RespuestaCredits } from '../interfaces/interfaces';
const URL = environment.url;
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  private popularPage = 0;
  constructor(private http:HttpClient) { }


  getPopularesInvitado(){
    this.popularPage++;
    const query = `/discover/tv?sort_by=popularity.desc&page=${this.popularPage}`;
    return this.executeQuery<MDBResponse>(query);
  }
  getFeatureInvitado():Observable<MDBResponse>{
    const hoy = new Date();
    const ultimoDia = new Date (hoy.getFullYear(),hoy.getMonth() + 1,0).getDate();
    const month = hoy.getMonth() +1;
    let mesString = month < 10 ?  `0${month}` : month;

    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const final = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;
    return this.executeQuery<MDBResponse>(`/discover/tv?primary_release_date.gte=${inicio}&primary_release_date.lte=${final}`);
  }
  searchMovie(query:string){
    return this.http.get(`${URL}/search/movie?api_key=${apiKey}&language=es&query=${query}`);

  }

  searchMovieKids(query:string){
    return this.http.get(`${URL}/search/movie?api_key=${apiKey}&certification_country=US&certification.lte=G&sort_by=popularity.desc&language=es&query=${query}`);

  }




  getPopulares(){
    this.popularPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularPage}`;
    return this.executeQuery<MDBResponse>(query);
  }
  private executeQuery<T>(query: string){
    query = URL+ query;
    query +=`&api_key=${apiKey}&language=es&include_image_language=es`
    return this.http.get<T>(query);

  }
  getFeature():Observable<MDBResponse>{
    const hoy = new Date();
    const ultimoDia = new Date (hoy.getFullYear(),hoy.getMonth() + 1,0).getDate();
    const month = hoy.getMonth() +1;
    let mesString = month < 10 ?  `0${month}` : month;

    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const final = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;
    return this.executeQuery<MDBResponse>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${final}`);
  }

  
  getMovieDetail(id: string) {
    return this.executeQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }
  getActorMovies(id: string) {
    return this.executeQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }  


  getTvDetail(id: string) {
    return this.executeQuery<PeliculaDetalle>(`/tv/${id}?a=1`);
  }
  getActorTv(id: string) {
    return this.executeQuery<RespuestaCredits>(`/tv/${id}/credits?a=1`);
  }  

  sessionId():Observable<any>{
    return this.executeQuery<any>(`/authentication/guest_session/new?${apiKey}`)
  }

  getMoviesKids(){
    return this.executeQuery<any>(`/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${apiKey}`)
  }
  
}
