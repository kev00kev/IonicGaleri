import { FotoService } from './../services/foto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  myRand: number;
  angka;
  bo: number;
  ionViewDidEnter(){
  	this.myRand = this.random()
  }
  random(): number{
  	let rand = Math.floor(Math.random()*20)+1;
  	return rand;
  }
  cek(){
  	if(this.myRand == this.angka){
  		this.bo = 1;
  	}
  	else{
  		this.bo = 0;
  	}
  }
  constructor(public fotoService:FotoService) {}
  async ngOnInit(){
  	await this.fotoService.loadFoto();
  }

}
