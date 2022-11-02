import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/servicios/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons = {}
  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getpokemons().subscribe(respuesta=>{
      this.pokemons=respuesta.results;
      console.log (this.pokemons)
    })
  }

}
