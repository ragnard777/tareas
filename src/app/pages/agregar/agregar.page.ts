import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    console.log(this.lista?.items);
    
    if(this.nombreItem.length === 0){
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista!.items.push(nuevoItem);
    console.log(this.lista?.items);
    this.nombreItem = '';
    this.cambioCheck(nuevoItem);

  }

  cambioCheck(item:ListaItem){
    console.log(item);

    //retorna un arreglo con todos los items pendientes.
    const pendientes = this.lista?.items.filter(itemData => {
      return !itemData.completado;
    }).length;

    console.log({pendientes});

    this.validarPendientes(pendientes);

    this.deseosService.guardarStorage();
    console.log("Listas despues de guardar ",this.deseosService.listas);
    
    
  }

  borrar(item:number){

   
    this.lista!.items = this.lista!.items.filter((elem,index) =>{
      return index !== item;
    });

    const pend = this.lista?.items.filter(itemData => {
      return !itemData.completado;
    }).length;
    if(pend === 0){
      this.lista!.terminada = true;
    }
    if(this.lista!.items.length === 0){
      console.log("eliminada lista");
      
    }
   this.deseosService.guardarStorage();
   console.log(" despues de borrar", this.lista!.items);
    
  }

  validarPendientes(pendientes:number | undefined){
    if(pendientes === 0){
      console.log("pendiente igual a 0 terminada en true");
      
      this.lista!.terminandaEn = new Date();
      this.lista!.terminada = true;
    }else {
      console.log("pendiente mayor a 0 terminada en false");
      this.lista!.terminandaEn = undefined;
      this.lista!.terminada = false;
    }
  }


}
