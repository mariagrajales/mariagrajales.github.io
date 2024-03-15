import { PlaylistModel } from "../model/playListModel.js";
import { MusicModel } from "../model/Music.js";
import { PlayerView } from "../view/playerView.js";
import { PlaylistView } from "../view/playlistView.js";

export class MusicPlayerController {
    constructor() {
      this.playlistModel = new PlaylistModel()
      this.playlistView = new PlaylistView();
      this.loadMusics()
      this.playerView = new PlayerView(this.playlistModel);
    }
  
    loadMusics() {
        let musica1 = new MusicModel("save your tears","./music/y2mate.com - The Weeknd  Save Your Tears Official Music Video.mp3");
        let musica2 = new MusicModel("thundertrack.","./music/thundertrack.mp3");
        let musica3 = new MusicModel("black in black.","./music/y2mate.com - Back in Black  ACDC Subtitulada en español.mp3");
        this.playlistModel.agregarCancion(musica1)
        this.playlistModel.agregarCancion(musica2)
        this.playlistModel.agregarCancion(musica3)
    }

    start(){
        this.playerView.reproducir()
    }
  
   
  }
  