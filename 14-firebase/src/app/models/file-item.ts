

export class FileItem {
  public archivo: File;
  public nombreArchivo: string;
  public url: string;
  public sube: boolean;
  public progreso: number;

  constructor(archivo: File) {

    this.archivo = archivo;
    this.nombreArchivo = archivo.name;
    this.sube = false;
    this.progreso = 0;
  }
}
