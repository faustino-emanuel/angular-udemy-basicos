import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

      //@Input() listadoPersonajes : Personaje[] = [];
      get personajes(){
        return this.dbzService.personajes;
      }
      constructor(private dbzService: DbzService){

      }
  }


