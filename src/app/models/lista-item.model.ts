


export class ListaItem {

    desc:string;
    completado:boolean;

    constructor(desc:string){
        this.desc = desc; //la descripcion va ser igual a la descripcion que recibo como argumento en el constructor.
        this.completado = false;
    }

}