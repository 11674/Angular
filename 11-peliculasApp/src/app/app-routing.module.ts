

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { BuscadorComponent} from './components/buscador/buscador.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';





const app_routes: Routes = [
  {path: 'home', component: HomeComponent},
    {path: 'buscador', component: BuscadorComponent},
    {path: 'buscador/:texto', component: BuscadorComponent},
      {path: 'pelicula/:id/:pag', component:PeliculaComponent},
          {path: 'pelicula/:id/:pag/:busqueda', component:PeliculaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];



export const APP_ROUTING = RouterModule.forRoot(app_routes);
