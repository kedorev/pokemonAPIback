import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from "../../interface/pokemon";


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor() { }


  @Input() pokemon ;

  ngOnInit()
  {
  }

}
