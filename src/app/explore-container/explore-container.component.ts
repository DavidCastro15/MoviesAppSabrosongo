import { Component, OnInit, Input } from '@angular/core';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { LocalStorageService } from '../services/local-storage.service';
import { PopoverController } from '@ionic/angular';
import { PopoverQrComponent } from '../components/popover-qr/popover-qr.component';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() peliculas: PeliculaDetalle[] = [];

  createdCode = null;

  constructor(private storage:LocalStorageService,
    public popoverController: PopoverController) { }

  ngOnInit() {}


  borrarFav(data:any){  
    this.storage.remover(data);
  }
  
  async presentPopover(qr: any) {
    this.createdCode = qr;
    const popover = await this.popoverController.create({
      component: PopoverQrComponent,
      componentProps:{qr},
      translucent: true
    });

    return await popover.present();
  }


}
