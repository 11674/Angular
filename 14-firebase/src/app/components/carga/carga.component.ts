import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagesService } from '../../services/carga-images.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  estaSobreDrop = false;
  archivos: FileItem[] = [];
  constructor(private serv: CargaImagesService) { }

  ngOnInit() {
  }
  cargarImagenes() {
    this.serv.cargarImagenesF(this.archivos);
    console.log(this.archivos);
  }

  pruebaSobreElemento(event) {
    console.log(event);
  }
  limpiarArchivos() {
    this.archivos = [];
  }
}
