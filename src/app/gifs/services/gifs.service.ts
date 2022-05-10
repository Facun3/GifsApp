import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/search-gifs-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  public gifs: Gif[] = []
  private apiKey: string = 'uWFa7JQFJmtv5PBVEZ9nzX8OSkfvF02z';
  private path: string = 'https://api.giphy.com/v1/gifs';
  private limit: number = 10;

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.gifs = JSON.parse(localStorage.getItem('ultimaBusqueda')!) || [];
  }

  get historial(){
    return [...this._historial]
  }

  buscarGifs( query: string) {
    console.log(query); 
    query = query.trim().toLowerCase();

    if (!this._historial.includes( query )) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify( this._historial ));
    }

const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', query);

    this.http.get<SearchGifsResponse>(`${ this.path }/search`, { params }).subscribe(
      response => {
        this.gifs = response.data;
        localStorage.setItem('ultimaBusqueda', JSON.stringify( this.gifs ));
      }
    );

  }
}
