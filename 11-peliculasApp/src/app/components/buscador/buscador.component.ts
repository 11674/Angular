import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  buscar: string = "";

  constructor(private routes: ActivatedRoute, private peliculasS: PeliculasService) {

          this.routes.params.subscribe( params => {console.log(params)
            if(params['texto']){
              this.buscar = params['texto'];
              this.buscarPelicula();
            }

          })
  }


  ngOnInit() {
  }

  buscarPelicula() {


    if (this.buscar.length == 0) {
      return;
    }
    this.peliculasS.getMovies(this.buscar)
      .subscribe((data: any) => {

      })
  }

}
