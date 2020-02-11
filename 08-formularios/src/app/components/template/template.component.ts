import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched: not(form) {
      border: 1px solid red;
    }
    `
  ]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellidos: null,
    email: null,
    pais: "",
    sexo: "Femenino",
    accepta: false
  }
  paises = [{
    codigo: "RO",
    nombre: "Rumania"
  },
  {
    codigo: "ESP",
    nombre: "España"
  }];

  sexos: string[] = ["Femenino", "Masculino"];
  constructor() { }

  ngOnInit() {
  }


  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log(forma);
  }
}
