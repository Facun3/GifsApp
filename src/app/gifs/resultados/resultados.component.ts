import { Component } from '@angular/core';
import { Gif } from '../interfaces/search-gifs-response.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  constructor( private gifsService: GifsService) { }

  get busqueda(): Gif[] {
    return this.gifsService.gifs;
  }

}
