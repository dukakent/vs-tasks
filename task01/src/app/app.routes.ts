import { Routes } from '@angular/router';

import { HomePageComponent } from './homePage/homePage.component';
import { AboutPageComponent } from './aboutPage/aboutPage.component';
import { AuthPageComponent } from './authPage/authPage.component';
import { ProfilePageComponent } from './profilePage/profilePage.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'auth',
        component: AuthPageComponent
    },
    {
        path: 'profile/:id',
        component: ProfilePageComponent
    }
];
