import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

      // FORMS
import { ReactiveFormsModule } from '@angular/forms';

     // Mapa
import { AgmCoreModule} from '@agm/core';

    // Angular Material
import {MaterialModule} from './material.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

    // Components
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot ({
      apiKey: 'AIzaSyDqij-JDlk24DjNgHTAsPx9c34i8Ek0tk0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
