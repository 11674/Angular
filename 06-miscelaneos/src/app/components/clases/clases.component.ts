import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  loading: boolean = false;
  propiedades: Object = {
    danger: true
  }
  alerta: string = "alert-danger";
  constructor() { }

  ngOnInit() {
  }

  ejecutar() {

    this.loading = true;

    setTimeout(() => this.loading = false, 3000)
  }

}
