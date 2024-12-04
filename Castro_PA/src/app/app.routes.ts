import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: NavbarComponent,
        outlet: 'header'
    },
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile'
    },
    {
        path: 'services',
        component: ServicesComponent,
        title: 'Services'
    },
    {
        path: '',
        component: ServiceDetailsComponent,
        outlet: 'right'
    },
    {
        path: '',
        component: ServicesListComponent,
        outlet: 'left'
    },
    {
        path: '',
        component: FooterComponent,
        outlet: 'footer'
    },
    {
        path: '**',
        component: NotfoundComponent,
        title: 'Error 404'
    }
];
