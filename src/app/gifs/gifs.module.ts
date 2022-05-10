import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPagesComponent } from './gifs-pages/gifs-pages.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ 
    GifsPagesComponent 
  ],
  declarations: [ 
    GifsPagesComponent, BusquedaComponent, ResultadosComponent 
  ]
})
export class GifsModule { }
