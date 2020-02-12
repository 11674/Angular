import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import 'firebase/storage';
import { FileItem } from '../models/file-item';
 // import * as firebase from 'firebase/app';
// import 'firebase/<PACKAGE>';


@Injectable({
  providedIn: 'root'
})
export class CargaImagesService {

  private CARPETA_IMAGES = 'img';

  constructor(private db: AngularFirestore) {


  }
  private guardarImagen(imagen: { nombre: string, url: string }) {
    console.log(imagen);
    this.db.collection(`/${this.CARPETA_IMAGES}`)
      .add(Object.assign({}, imagen));

  }


  cargarImagenesF(imagenes: FileItem[]) {
    const storageRef = firebase.storage().ref();
    for (const item of imagenes) {
      item.sube = true;
      if (item.progreso >= 100) {
        continue;
      }
      const uploadTask: firebase.storage.UploadTask =
        storageRef.child(`${this.CARPETA_IMAGES}/${item.nombreArchivo}`)
          .put(item.archivo);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) =>
          item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
           (error) => console.error('Error al subir', error),
           ()  => {
          console.log('Imagen cargada corectamente');

          uploadTask.snapshot.ref.getDownloadURL()
              .then((url: any) => {
                 item.url = url;
                item.sube =false;
             this.guardarImagen({
            nombre: item.nombreArchivo,
            url: item.url
          });
        });
    }
  );
}; // for
} // function
}
