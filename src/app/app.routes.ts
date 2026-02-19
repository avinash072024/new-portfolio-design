import { Routes } from '@angular/router';
import { Constants } from './models/constants';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SkillsComponent } from './pages/skills/skills.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: `Home | ${Constants.APP_TITLE}` },
    { path: 'about', component: AboutComponent, title: `About Me | ${Constants.APP_TITLE}` },
    { path: 'projects', component: ProjectsComponent, title: `My Projects | ${Constants.APP_TITLE}` },
    { path: 'contact', component: ContactComponent, title: `Contact Me | ${Constants.APP_TITLE}` },
    { path: 'skills', component: SkillsComponent, title: `My Skills | ${Constants.APP_TITLE}` },
    // Redirect unknown paths to home
    { path: '**', component: NotFoundComponent, title: '404 - Not Found' }
];
