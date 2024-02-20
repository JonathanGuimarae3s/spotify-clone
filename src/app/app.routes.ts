import { Routes } from '@angular/router';
import { authenticatedGuard } from './guards/authenticated.guard';
export const routes: Routes = [

    {
        path: '',
        redirectTo: 'player',
        pathMatch: 'full'
    },
    {
        path: 'player',
        loadChildren: () => import('./pages/player/player.module').then(x => x.PlayerModule),
        canActivate: [authenticatedGuard]

    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
    }



];


