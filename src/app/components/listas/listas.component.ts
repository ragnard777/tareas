import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @Input() terminada = true;

  constructor(public deseosService: DeseosService, private router: Router) {}

  ngOnInit() {
    console.log();
  }

  listaSeleccionada(lista: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/{{lista.id}}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/{{lista.id}}`);
    }
  }

  borrarLista(item: Lista) {
    console.log('Metodo borrarLista ', item);

    this.deseosService.borrarLista(item);

    /* this.deseosService.listas.splice(item,1);
    this.deseosService.guardarStorage(); */
  }
}
