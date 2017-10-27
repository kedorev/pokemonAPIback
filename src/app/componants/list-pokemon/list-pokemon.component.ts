import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../service/database.service";
import { Pokemon } from "../../interface/pokemon";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  pokemons: Array<Pokemon> = [];

  constructor(private database:DatabaseService) {

  }

  ngOnInit()
  {
    for(var i = 1; i< 85; i++)
    {
      this.database.getPokemonById(i).then( data => {
        //console.log(data);
        let pokemon: Pokemon = {
          name: data.name,
          id: data.id,
          weight: data.weight,
          height: data.height,
          spriteFront: data.spriteFront,
        };
        this.pokemons.push(pokemon);
      });
    }
  }

}
