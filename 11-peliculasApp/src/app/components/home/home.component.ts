import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor(public peliculasS: PeliculasService) {
    this.peliculasS.getCarterela()
      .subscribe((data: any) => {
        this.cartelera = data.results;
        console.log("cartelera",data);
      })

    this.peliculasS.getPopulares()
      .subscribe((data: any) => {
        this.populares = data.results;
        console.log("populares", data)
      })
      this.peliculasS.getPeliculasNinos()
        .subscribe((data: any) => {
          this.popularesNinos = data.results;
          console.log("peliculasNinos", data)
        })
  }

  ngOnInit() {
  }


}
