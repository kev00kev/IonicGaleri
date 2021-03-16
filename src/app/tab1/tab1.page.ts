import { FotoService } from './../services/foto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public fotoService:FotoService) {}


  async ngOnInit(){
  	await this.fotoService.loadFoto();
  }

  TambahFoto(){
  	this.fotoService.tambahFoto();
  }

}
