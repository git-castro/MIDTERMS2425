import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path: '#', 
        component: HomeComponent
    },
    {
        path: 'about', 
        component: AboutComponent
    },
    {
        path: 'home/about', 
        component: AboutComponent
    },
    {
        path: 'services', 
        component: ServicesComponent
    },
    {
        path: 'contact', 
        component: ContactComponent
    },
    {
        path: '**', 
        component: NotfoundComponent
    }
];