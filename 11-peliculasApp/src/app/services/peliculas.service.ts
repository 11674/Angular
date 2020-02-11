import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators'; // Map


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = "e776ad69a580b31d91b98144910b455d";
  private urlMovieDb: string = "https://api.themoviedb.org/3";

  peliculas: any[] = [];


  constructor(private jsonp: Jsonp) { }


  // TODO: la fecha no funciona
  getCarterela() {
    let desde: Date = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${ desde.getFullYear() }-${desde.getMonth() + 1}-${desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate() }`;
    let url = `${this.urlMovieDb}/discover/movie?primary_release.gte=${desdeStr}&primary_release.lte=${hastaStr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .pipe(
        map(res => res.json())
      )
  }


  getPopulares() {
    //CALL BACK JSONP
    let url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.asc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`

    return this.jsonp.get(url)
      .pipe(
        map(res => res.json())

      )
  }


  //BUSCAR PELICULA- RESULTADOS
  getMovies(peliculas: string) {

    let url = `${this.urlMovieDb}/search/movie?query=${peliculas}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;



    return this.jsonp.get(url)
      .pipe(
        map((res: any) => {
          this.peliculas = res.json().results;
          console.log(this.peliculas)
          res.json.results
        })
      )
  }

  getPeliculasNinos() {

    let url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .pipe(
        map((res: any) => res.json())
      )
  }

  getPelicula(id: string) {

    let url = `${this.urlMovieDb}/movie/${ id }?&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`

    return this.jsonp.get(url)
      .pipe(
        map(res => res.json())

      )
  }

}
