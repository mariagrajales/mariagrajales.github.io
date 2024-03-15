
export class PlayerView {
    constructor(lista) {
      this.musicLista = lista;
      this.cancionActual = document.getElementById("cancion-source");
      this.reproductor =document.getElementById("reproductor" );
      this.infoMusic = document.getElementById("info-music");
      this.nextMusic = document.getElementById("nextMusic");
      this.prevMusic = document.getElementById("prevMusic")
      this.nameMusic = document.getElementById("nameMusic");
      this.addEventButtons();

    }
     
    reproducir(){
      let music = this.musicLista.actualMusic()
      console.log(music)
        this.nameMusic.innerHTML = music.getName()
        this.cancionActual.src = music.getRuta();
        this.reproductor.load()
        this.reproductor.play();
    }

    getInformationActual(music){
       this.infoMusic.innerHTML = music.getName()
    }

    addEventButtons(){
      this.nextMusic.addEventListener("click",()=>{
        this.musicLista.nextMusic();
        this.reproducir()
      })

     this.prevMusic.addEventListener("click",()=>{
        this.musicLista.prevMusic()
        this.reproducir()
     })
    }


  }
  