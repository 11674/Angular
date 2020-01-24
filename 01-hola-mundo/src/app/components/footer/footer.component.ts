import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

    ano: number;

    constructor(){
      this.ano = new Date().getFullYear();
    }


}
