import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class PokeApiService {

  constructor( private http:Http ) {}


  getPokemonPromise(request:string):any
  {
    console.log("debug");
    return this.http.get(request).map((res: Response) => JSON.parse(res.text())).toPromise();
  }

  testPromise() {
    let i = 0;
    return new Promise(function (resolve, reject)
    {
      if(i == 0)
        resolve(true);
      else
        reject(false);
    })
  }
}
