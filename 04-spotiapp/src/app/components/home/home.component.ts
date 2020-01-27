import { Component} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {
loading: boolean;
nuevasCanciones: any[]= [];


  constructor( private spotify: SpotifyService) {
    this.loading =true;
      this.spotify.getnewReleases()
          .subscribe((data: any) => {
          this.nuevasCanciones = data;
          this.loading=false;
    });
}
}
