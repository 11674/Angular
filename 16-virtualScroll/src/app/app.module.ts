import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualsComponent } from './virtuals/virtuals.component';

import { ScrollingModule, ScrollDispatcher, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Platform } from '@angular/cdk/platform';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragComponent } from './drag/drag.component';
import { PaisesComponent } from './paises/paises.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    VirtualsComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    HttpClientModule
  ],
  providers: [ScrollDispatcher, Platform, CdkVirtualScrollViewport, DragDropModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
