import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista:Lista | undefined;
  nombreItem = '';

  constructor(private deseosService:DeseosService, private route:ActivatedRoute) {
    const listaId = Number(this.route.snapshot.paramMap.get('listaId'));
    this.lista = this.deseosService.obtenerLista(listaId);
    console.log("Agregar page despues de obtener lista",this.lista);
    
   }



  ngOnInit() {
  }

  agregarItem(){
    if(this.nombreItem.length === 0){
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista!.items.push(nuevoItem);
    this.nombreItem = '';
  }

  cambioCheck(item:ListaItem){
    console.log(item);

    //retorna un arreglo con todos los items pendientes.
    const pendientes = this.lista?.items.filter(itemData => {
      return !itemData.completado;
    }).length;

    console.log({pendientes});

    if(pendientes === 0){
      this.lista!.terminandaEn = new Date();
      this.lista!.terminada = true;
    }else {
      this.lista!.terminandaEn = undefined;
      this.lista!.terminada = false;
    }
    

    this.deseosService.guardarStorage();
    console.log("Listas despues de guardar ",this.deseosService.listas);
    
    
  }

  borrar(item:number){
   this.lista?.items.splice(item,1);
   this.deseosService.guardarStorage();
    
  }


}
