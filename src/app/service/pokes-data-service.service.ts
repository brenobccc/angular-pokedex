import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedata } from '../models/poke.model';

@Injectable({
  providedIn: 'root'
})
export class PokesDataService{

  constructor(private http: HttpClient) { }
  //funcao que irá  buscar pokemons na api
  public getPokes(): Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon/');
  }
}
