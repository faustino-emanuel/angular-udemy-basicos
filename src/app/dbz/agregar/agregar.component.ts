import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{
  
  //@Input() listadoPersonajes: Personaje[] = []

 nuevo : Personaje = {
    nombre: '',
    poder: 0
  }
  //agregar el servicio al constructor
  constructor(private dbzService:DbzService){}

  agregar(){  
    if(this.nuevo.nombre.trim().length == 0)
      {return;}
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {nombre:'',poder:0};
  }

  }


