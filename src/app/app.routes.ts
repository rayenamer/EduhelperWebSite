import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { CommunityComponent } from './community/community.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path:'community',component:CommunityComponent},
    {path: 'careers', component: CareersComponent },
    {path: 'aboutus', component: AboutusComponent },
    {path:'services', component:OurservicesComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full' },
];
