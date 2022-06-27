import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";
//LOS MODULOS SON NECESARIOS PARA QUE AL CARGAR LA PLICACVION SOLO PODAMOS CRAGAR LOS QUE SE USAN Y NO TODOS
//HACIENDO MAS EFICIENTE EL USO DE LA APLICACION

@NgModule({
    //COMPONENTES QUE VAN EL MODULO (agrego mis COMPONENTES)
    declarations: [
        ContadorComponent
      ],
      //COMPONENTES VISIBLES Y PUBLICOS (exporto los componentes PARA USAR EN LA VISTA)
      exports: [
        ContadorComponent
      ],
      //aca van solo modulos (solo usamos el common , es para los ngif y cosas asi)
      //por ejemplo en el el modulo principar tendria quqe estar el HeroesModules si queremos usarlo
      //QUE MODULOS CARGAR EN LA APLICACION
      imports:
      [
      ]
})
//este modulo luego debe ser importado en el modulo principar para poder ser usado 
export class ContadorModules{}