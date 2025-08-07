import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminComponent } from './admin/admin.component';
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
    {path:'AdminDashboard', component: AdminComponent},
    {path: 'AdminLogin', component: AdminLoginComponent},
    {path: 'AdminJdid', component: AdminRegisterComponent},
    {path: 'login', component: LoginComponent },
    {path: 'registerservice', component: RegisterComponent},
    {path: 'resetpass', component: ResetPasswordComponent },
    {path: 'ForgotPass', component: ForgotPasswordComponent},
    {path : 'Acceuil', component: AcceuilComponent},
    {path: 'AdminDashboard', component: AdminComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full' },
];
