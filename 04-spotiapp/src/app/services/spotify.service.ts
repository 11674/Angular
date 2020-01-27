import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { console.log("Service listo!");}
  // nos declaramos una funcion para acortar el codigo  y que se quede mas limpio

  getQuery(query: string){

    const url=`https://api.spotify.com/v1/${ query }`;
    const headers=new HttpHeaders({
      'Authorization': 'Bearer BQDQAONNa0LC3L5zn6T3SUJRAySypO5-77jqXQ-dX-vqxJVh3Cf69uh3NyTtML6HGIOO2xn9q8VHyTQ93Pc'
    });
    return this.http.get(url, { headers });
  }

  getnewReleases() {
  return this.getQuery('browse/new-releases?limit=10')
              .pipe(map( data => data['albums'].items));

  }

  getArtistas(termino:string){
  return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=10`)
                  .pipe( map (data => data['artists'].items));

  }
  getArtista(id: string){
    return this.getQuery(`artists/${ id }`)
                    //.pipe( map (data => data['artists'].items));
  }
  getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                    .pipe( map (data => data['tracks']));
  }

}
