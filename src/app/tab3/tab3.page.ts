import { Component,Input, OnInit } from '@angular/core';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public storage: LocalStorageService,
    private route:Router) {}


  salir(){
    localStorage.clear()
    this.route.navigateByUrl('/login')
  }
}
