import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSelect: EventEmitter<number>;

  constructor( private router: Router) {
    this.heroeSelect= new EventEmitter();
   }

  ngOnInit() {
  }

 verHeroe(){
    this.router.navigate(['/heroe', this.index]);
    //console.log(this.index);
    //this.heroeSelect.emit( this.index);
  }

}
