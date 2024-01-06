import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CoursComponent } from './components/pages/cours/cours.component';
import { EventsComponent } from './components/pages/events/events.component';
import { ArticlesComponent } from './components/pages/articles/articles.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    title: 'Xelcom',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Xelcom - Accueil',
      },
      {
        path: 'cours',
        component: CoursComponent,
        title: 'Xelcom - Cours',
      },
      {
        path: 'events',
        component: EventsComponent,
        title: 'Xelcom - Events',
      },
      {
        path: 'articles',
        component: ArticlesComponent,
        title: 'Xelcom - Articles',
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'Xelcom - A Propos',
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Xelcom - Contact',
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Xelcom - Se connecter',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: "Xelcom - S'inscrire",
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
