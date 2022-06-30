import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    private _personajes : Personaje[] = [
        {
          nombre:'goku',
          poder:15000
        },
        {
          nombre:'vegeta',
          poder:7500
        }
    ];
    //asi solo es legible no editable (los personajes) -- rompe el valor por referencia a personajes
    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje(personaje: Personaje){
      this._personajes.push(personaje);

    }

}