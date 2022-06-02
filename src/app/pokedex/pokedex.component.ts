import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GetPokemonsService } from '../services/get-pokemons.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  constructor(private pokemonService: GetPokemonsService) {}
  dataPopulated: boolean = false;
  pokemonType = '';
  pokemonDetails: any[] = [];
  page = 1;
  totalPokemons?: number = 0;
  sortOrder = 'asc';
  sortFlag = false;
  sortParam = '';
  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe((response: any) => {
      this.totalPokemons = response.count;
      response.results.forEach((pokemon: any) => {
        this.pokemonService.getPokemonDetails(pokemon.name).subscribe((res) => {
          this.pokemonDetails.push(res);
          if (this.pokemonDetails.length === this.totalPokemons) {
            this.dataPopulated = true;
          }
        });
      });
    });
  }
  clearInput() {
    this.pokemonType = '';
    this.sortParam = '';
  }

  toggleSort() {
    if (!this.sortFlag) {
      this.sortFlag = true;
      this.sortOrder = 'desc';
    } else {
      this.sortFlag = false;
      this.sortOrder = 'asc';
    }
  }
}
