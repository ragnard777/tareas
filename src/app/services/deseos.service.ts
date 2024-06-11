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
