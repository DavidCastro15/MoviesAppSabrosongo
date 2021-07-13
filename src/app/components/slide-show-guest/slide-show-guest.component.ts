import { Component, Input, OnInit } from '@angular/core';
import { Pelicula, PeliculaDetalle } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slide-show-guest',
  templateUrl: './slide-show-guest.component.html',
  styleUrls: ['./slide-show-guest.component.scss'],
})
export class SlideShowGuestComponent implements OnInit {

  @Input() movies:Pelicula[] = [];
  constructor() { }

  ngOnInit() {}
  slideOpts = {
    slidesPerView: 2.2,
    freeMode:true
    }
}
