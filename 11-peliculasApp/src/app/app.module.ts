import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

// SERVICE
import { PeliculasService} from './services/peliculas.service';

import { APP_ROUTING } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

// PIPES
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { SlideComponent } from './components/home/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscadorComponent,
    NavbarComponent,
    PeliculaComponent,
    PeliculaImagenPipe,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
