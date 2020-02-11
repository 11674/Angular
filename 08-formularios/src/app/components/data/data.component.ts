import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;
  usuario: any = {
    nombrecompleto: {
      nombre: "Larisa",
      apellidos: "sicoe"
    },
    email: "sicoe.larisa@yahoo.com",
    //pasatiempos: ['Correr', 'Estudiar', 'Viajar']
  }

  constructor() {
    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellidos': new FormControl('', [

          Validators.required,
          this.noHerrera
        ])
      }),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    })
    //Referencia al password2
    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);
    // DETECTAR CAMBIOS - MANEJAR CAMBIOS
    //Todo los cambios del formulario
    this.forma.valueChanges
      .subscribe(data => { console.log(data) })
    //Username
    this.forma.controls['username'].valueChanges
      .subscribe(data => { console.log(data) })
    // VALIDO/INVALIDO
    this.forma.controls['username'].statusChanges
      .subscribe(data => { console.log(data) })


    //this.forma.setValue( this.usuario);

  }

  ngOnInit() {
  }

  //Metodos de resetear el formulario o cambiarle con los valores que queremos
  guardarCambios() {
    console.log(this.forma);
    console.log(this.forma.value);
    // //   // this.forma.reset({
    // //   //   nombrecompleto:{
    // //   //     nombre: "",
    // //   //     apellidos:""
    // //   //   },
    // //   //   email: ""
    // //   // });
    // this.forma.controls['email'].setValue('Nuevo email');

  }

  agregarPasaTiempo() {


    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  // El status del FormGroup va retornar false cuando se escriba herrera
  noHerrera(control: FormControl): { [s: string]: boolean } {

    if (control.value === "herrera") {
      return {
        noherrera: true
      }
    }
    return null;
  }

  // Validar el password

  noIgual(control: FormControl): { [s: string]: boolean } {
    let forma: any = this;

    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      }
    }
    return null;
  }
  // FUNCION USERNAME

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {


    let promesa = new Promise((resolve, reject) => {

      setTimeout(() => {

        if (control.value === " strider ") {
          resolve({ existe: true })
        } else {
          resolve(null)
        }

      }, 3000)

    })
    return promesa;
  }


}
