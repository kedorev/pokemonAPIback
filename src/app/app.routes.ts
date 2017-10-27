import { RouterModule, Routes } from "@angular/router";

//Component
import { HomeComponent } from "./componants/home/home.component";
import { Page404Component } from './componants/page404/page404.component';
import { PokemonComponent } from './componants/pokemon/pokemon.component';
import { AbilitiesComponent } from './componants/abilities/abilities.component';
import { GenerationComponent } from './componants/generation/generation.component';
import { ListPokemonComponent} from "./componants/list-pokemon/list-pokemon.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'pokemon', component: ListPokemonComponent},
  { path: 'Abilitie', component: AbilitiesComponent},
  { path: '**', component: Page404Component}
];

export const PokeRouting = RouterModule.forRoot(routes);
