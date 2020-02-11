import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '.././models/heroe.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = "https://crud-angular-4c44e.firebaseio.com";

  constructor(private http: HttpClient) { }

  // METODO POST-CREATE
  crearHeroe(heroe: HeroeModel) {
    return this.http.post(`${this.url}/heroes.json`, heroe)
      .pipe(
        map((resp: any) => {
          heroe.id = resp.name;
          return heroe;
        })
      );
  }

  // METODO PUT_ ACTUALIZAR
  actualizarHeroe(heroe: HeroeModel) {

    const heroeTemp = {
      ...heroe
    };
    delete heroeTemp.id;
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroe);
  }

  // METODO GET- OBTENER
  getHeroe() {
    return this.http.get(`${this.url}/heroes.json`)
      .pipe(
        map(this.crearArray),
        delay(1500)
      );

  }

  //METODO PARA OBTENER EL OBJETO DEL HEROE
  private crearArray(heroesObj: Object) {
    const heroes: HeroeModel[] = [];
    if (heroesObj === null) { return []; }
    Object.keys(heroesObj).forEach(key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;

      heroes.push(heroe);
    });
    return heroes;
  }

  // OBTENER HEROE POR ID-UPDATE
  obtenerH(id: string) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  //METODO DELETE
  borrarHeroe(id: string) {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }
}
