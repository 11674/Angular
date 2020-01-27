import { Component } from '@angular/core';
import{SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  loading:boolean;
  artistas: any[] =[];
  error:boolean;
  mensajeError: string;
  constructor(private spotify: SpotifyService ) {
}

  buscar(termino: string) {
    this.loading =true;
      this.error=false;
    //console.log(termino);
    this.spotify.getArtistas(termino)
      .subscribe((data: any) => {
      //  console.log(data.artists.items)
        this.artistas = data;
        this.loading=false;
      },(errorServicio) => {
        this.error=true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
         }
        )};
}
