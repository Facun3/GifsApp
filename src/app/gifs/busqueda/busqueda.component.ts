import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('input') busqueda!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  buscar(){

    const valor = this.busqueda.nativeElement.value;

    if ( valor.trim().length <= 0){
      return;
    }

    this.gifsService.buscarGifs( valor );

    this.busqueda.nativeElement.value = '';

  }

}
