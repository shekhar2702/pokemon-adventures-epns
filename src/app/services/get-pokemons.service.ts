import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonsService {
  URL: string = 'https://pokeapi.co/api/v2/';
  limit = 1126;
  constructor(private http: HttpClient) {}
  getPokemons() {
    const relativePokemonURL = 'pokemon?limit=' + this.limit;
    return this.http.get(this.URL + relativePokemonURL);
  }

  getPokemonDetails(name: string) {
    const namedPokemonURL = 'pokemon/' + name;
    return this.http.get(this.URL + namedPokemonURL);
  }
}
