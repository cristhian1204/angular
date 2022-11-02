import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
  getpokemons () : Observable<any> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/?limit=200")}; 
}
