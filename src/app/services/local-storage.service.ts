import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _storage: Storage | null = null;
  pelicula:PeliculaDetalle[]=[];
  constructor(private storage: Storage) {
    this.init();
    this.cargarFavoritos();
  }

  guardarPelicula(pelicula: PeliculaDetalle){

    if(this.pelicula){
      const exist = this.pelicula.find(n => n.title == pelicula.title);  
    if(!exist){
      this.pelicula.unshift(pelicula);
      this.set('Favoritos', this.pelicula);
    }else{
      this.remover(pelicula);
    }
    
  }else{
    this.pelicula = [];
    this.pelicula.unshift(pelicula);
    this.set('Favoritos', this.pelicula);
  }
}


async remover(pelicula: PeliculaDetalle) {
  this.pelicula =  this.pelicula.filter(n => n.id !== pelicula.id)

  this.set('Favoritos', this.pelicula);
}

async cargarFavoritos(){
  const favoritos = await this.storage.get('Favoritos');
  this.pelicula = favoritos;
}


  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }



}
