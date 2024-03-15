export class MusicModel{
    constructor(nombre, ruta) {
        this.nombre = nombre;
        this.ruta = ruta;
    }

    getName(){
        return this.nombre;
    }

    getRuta(){
        return this.ruta;
    }
}