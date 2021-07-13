import { Component, Input, OnInit } from '@angular/core';
import { MDBResponse, Pelicula, PeliculaDetalle } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slide-show-backdrop',
  templateUrl: './slide-show-backdrop.component.html',
  styleUrls: ['./slide-show-backdrop.component.scss'],
})
export class SlideShowBackdropComponent implements OnInit {

  @Input() movies : PeliculaDetalle[] = [];
  constructor() { }

  ngOnInit() {
    
  }

  slideOpts = {
    slidesPerView: 1,
    freeMode:true,
  }
}
