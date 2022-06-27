import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
//LOS MODULOS SON NECESARIOS PARA QUE AL CARGAR LA PLICACVION SOLO PODAMOS CRAGAR LOS QUE SE USAN Y NO TODOS
//HACIENDO MAS EFICIENTE EL USO DE LA APLICACION

@NgModule({
    //que componente quiero incorporar en mi modulo(que componentas van el modulo)
    //COMPONENTES QUE VAN EL MODULO
    declarations: [
       HeroeComponent,
       ListadoComponent
      ],
      //que cosas con visibles y publicas fuera del modulo(si no declaro HeroeComponent, no puedo usar el <app-heroe></app-heroe> )
      //COMPONENTES VISIBLES Y PUBLICOS (PARA USAR EN LA VISTA)
      exports: [
        ListadoComponent,
        HeroeComponent
      ],
      //aca van solo modulos (solo usamos el common , es para los ngif y cosas asi)
      //por ejemplo en el el modulo principar tendria quqe estar el HeroesModules si queremos usarlo
      //QUE MODULOS CARGAR EN LA APLICACION
      imports:
      [
        CommonModule
      ]
})
//este modulo luego debe ser importado en el modulo principar para poder ser usado 
export class HeroesModules{}