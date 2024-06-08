import { Routes } from '@angular/router';
import { HojaDeVidaComponent } from './components/hoja-de-vida/hoja-de-vida.component';

export const routes: Routes = [
    {
        path: 'index',
        loadComponent: () =>
          import('./components/perfil/perfil.component'),
    },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'perfil', redirectTo: 'index', pathMatch: 'full' },
    { path: 'hojadevida', redirectTo: 'hojadevida', pathMatch: 'full' },

    { path: 'hojadevida', component: HojaDeVidaComponent },
];
