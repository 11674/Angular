import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';


@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {
  @Input() archivos: FileItem[] = [];

  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEvent(event: any) {
    this.mouseSobre.emit(true);
    this.prevenirArchivo(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseSobre.emit(false);
    this.prevenirArchivo(event);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    this.mouseSobre.emit(false);
    const transferencia = this.getTransferencia(event);
    if (!transferencia) {
      return;
    }
    this.extraerArchivos(transferencia.files);
    this.prevenirArchivo(event);
  }

  private extraerArchivos(archivosLista: FileList) {

    for (const propiedad in Object.getOwnPropertyNames(archivosLista)) {
      const archivoTemp = archivosLista[propiedad];
      if (this.archivoCargado(archivoTemp)) {
        const nuevoArchivo = new FileItem(archivoTemp);
        this.archivos.push(nuevoArchivo);

      }
    }
  }

  private getTransferencia(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  // Validaciones
  private archivoCargado(archivo: File): boolean {
    if (!this.archivoSubido(archivo.name) && this.esImagen(archivo.type)) {
      return true;
    } else { return false; }
  }
  private prevenirArchivo(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private archivoSubido(nombreArchivo: string): boolean {
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo === nombreArchivo) {
        console.log('El archivo ' + nombreArchivo + ' ya esta agregado ');
        return true;
      }
    }
    return false;
  }

  private esImagen(tipoArchivo: string): boolean {
    return (tipoArchivo === '' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
  }
}
