import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LayoutComponent } from './layout/layout.component';
import { BodyComponent } from './body/body.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'component', component: ContentComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
        ContentComponent,
        UserDetailsComponent,
        LayoutComponent,
        BodyComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
