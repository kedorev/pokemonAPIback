import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './componants/header/header.component';
import { FooterComponent } from './componants/footer/footer.component';
import { HomeComponent } from "./componants/home/home.component";
import { HttpModule } from "@angular/http";
import { Page404Component } from './componants/page404/page404.component';
import { PokemonComponent } from './componants/pokemon/pokemon.component';
import { AbilitiesComponent } from './componants/abilities/abilities.component';
import { GenerationComponent } from './componants/generation/generation.component';
import { ListPokemonComponent } from './componants/list-pokemon/list-pokemon.component';

import { PokeRouting } from "./app.routes";



//Service
import { PokeApiService } from "./service/poke-api.service";
import { DatabaseService} from "./service/database.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    PokemonComponent,
    AbilitiesComponent,
    GenerationComponent,
    ListPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PokeRouting
  ],
  providers: [DatabaseService, PokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
