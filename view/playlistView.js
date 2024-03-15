
export class PlaylistView {
    constructor() {
      this.listaReproduccion = document.getElementById("lista-reproduccion");
    }
  
    mostrarPlaylist(playlist) {
      this.listaReproduccion.innerHTML = "";
      playlist.forEach((cancion, index) => {
        const cancionElemento = document.createElement("li");
        cancionElemento.textContent = cancion.getName();
        this.listaReproduccion.appendChild(cancionElemento);
      });
    }
  }
  