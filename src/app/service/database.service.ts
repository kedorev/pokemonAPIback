import { Injectable } from '@angular/core';
import { PokeApiService } from "./poke-api.service";
import { Http } from "@angular/http";


@Injectable()
export class DatabaseService {

  urlSite:string = "http://127.0.0.1:3000";
  pokeApi: PokeApiService;
  constructor(private http:Http)
  {
    this.pokeApi = new PokeApiService(http);
  }


  getPokemonById(id:number)
  {
    //With api stance
    let urlPokemon = this.urlSite+"/pokemon/"+id+"/";
    return this.pokeApi.getPokemonPromise(urlPokemon);


  }
}
