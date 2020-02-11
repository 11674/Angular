import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  regresar:string;
  busqueda:string;


  constructor(private routes: ActivatedRoute, private peliculasS: PeliculasService) {
    this.routes.params.subscribe( params => {console.log(params)
      this.regresar=params['pag'];
      if(params['busqueda']){
        this.busqueda = params['busqueda'];
      }
      this.peliculasS.getPelicula(params.id)
                      .subscribe(pelicula =>  this.pelicula = pelicula)


    })


  }

  ngOnInit() {
  }

}
