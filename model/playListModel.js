import DoubleLinkedList from "./DoubleLinkedList.js";
export class PlaylistModel {
    constructor() {
    this.posicion = 0;
      this.playlist = new DoubleLinkedList();
    }
  
    agregarCancion(cancion) {
      this.playlist.addEnd(cancion)
    }
  
    obtenerPlaylist() {
      return this.playlist.getFirstToEnd();
    }

    actualMusic(){
        return this.playlist.getAt(this.posicion);
    }
    nextMusic(){
        this.posicion += 1;
        let value = this.playlist.getAt(this.posicion);
        if(!value){//cuando la lista nos arroje un valor nulo
            this.posicion = 0;
            let value = this.playlist.getAt(0);
            console.log(value)
            return value;
        }

        return value
    }

    prevMusic() {
        this.posicion -= 1;
        let value = this.playlist.getAt(this.posicion);

        if (!value) {
            this.posicion = this.playlist.getSize() - 1;
            value = this.playlist.getAt(this.posicion);
        }

        return value;
    }
  }
  