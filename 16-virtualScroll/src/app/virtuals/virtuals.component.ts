import { Component, OnInit, ViewChild } from '@angular/core';
import {  CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtuals',
  templateUrl: './virtuals.component.html',
  styleUrls: ['./virtuals.component.css']
})
export class VirtualsComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport

  personas = Array(500).fill(0);

  constructor() {

   }
   irInicio(){
     this.viewport.scrollToIndex(0);
   }
   irMitad(){
     this.viewport.scrollToIndex(this.personas.length / 2);
   }
   irFinal(){
       this.viewport.scrollToIndex(this.personas.length)
   }

  ngOnInit() {
  }


}
