import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {

  @Input() movies : Pelicula[] = [];
  @Output() cargarMas = new EventEmitter(); 
  constructor() { }

  ngOnInit() {}

  slideOpts = {
    slidesPerView: 3.3,
    freeMode:true,
    spaceBetween: -10
    }
    loadMovies(){
      this.cargarMas.emit();
  
      
      
    }

}
