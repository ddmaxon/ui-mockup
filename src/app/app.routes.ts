import { Routes } from '@angular/router';
import { HomeComponent } from './feats/home/home.component';
import { DashboardComponent } from './feats/dashboard/dashboard.component';
import { PagenotfoundComponent } from './feats/errors/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
];
