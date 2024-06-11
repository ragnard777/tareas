import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {


  listas:Lista[] = [];


  constructor() {
    console.log('Servicio inicializado');
    this.cargarStorage();
    
   }

   crearLista(titulo:string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;

   }

   obtenerLista(id:number){
    return this.listas.find(listaData => { return listaData.id === id});
   }

   cargarStorage(){
    //validar si existe
    let result = localStorage.getItem('data');
    this.listas = JSON.parse(result || '[]');
   }

   guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));

}


}
