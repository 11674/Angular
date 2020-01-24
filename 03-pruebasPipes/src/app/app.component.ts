import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Larisa";
  nombre2 = "lariSa AndReea SicOe";

  arreglo=[0,1,2,3,4,5,6,7,8,9];
  PI = Math.PI;
  porcentaje= 0.234;
  moneda = 12345.5;
  json = {
    nombre: "Larisa",
    clave:"Andreea",
    edad: 30,
    direcion: {
      calle: "Primera",
      casa: "19"
    }
  };
    promesa = new Promise( (resolve, reject) =>{
      setTimeout( () => resolve('Llego la data!'), 3500);    })

fecha = new Date();
video: string = "m0eSf0JrUIk";
activar:boolean=true;

    }
