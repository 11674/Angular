import { Component, OnInit } from '@angular/core';

import { PeliculasService} from '../../services/peliculas.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private peliculasS: PeliculasService, private router: Router) { }

  ngOnInit() {
  }


buscarP(texto:string){

  if(texto.length == 0){
    return;
  }

this.router.navigate(['buscador', texto]);

  console.log(texto)

}
}
