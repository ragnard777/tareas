import { ListaItem } from "./lista-item.model";



//Instancia lista.
export class Lista {

    id:number;
    titulo:string;
    creadaEn:Date;
    terminandaEn:Date | undefined;
    terminada:boolean;
    items: ListaItem[];

    constructor(titulo:string){
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();

    }

}