import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
//LOS MODULOS SON NECESARIOS PARA QUE AL CARGAR LA PLICACVION SOLO PODAMOS CRAGAR LOS QUE SE USAN Y NO TODOS
//HACIENDO MAS EFICIENTE EL USO DE LA APLICACION

@NgModule({
    //COMPONENTES QUE VAN EL MODULO (Que componentes incluye mi modulo)
    declarations: [
       HeroeComponent,
       ListadoComponent
      ],
      //COMPONENTES VISIBLES Y PUBLICOS (PARA USAR EN LA VISTA)
      exports: [
        ListadoComponent,
        HeroeComponent
      ],
      //QUE MODULOS CARGAR EN LA APLICACION al inicializar
      imports:
      [
        CommonModule
      ]
})
//este modulo luego debe ser importado en el modulo principar para poder ser usado 
export class HeroesModules{}