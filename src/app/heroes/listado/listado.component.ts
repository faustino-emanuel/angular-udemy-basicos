import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[] = ['Sipderman','Hulk','Thor'];
  borrado:string ='';

  borrarHeroe(){
    console.log('borrando..');
    this.borrado = this.heroes.shift() || "";

  }

  }


