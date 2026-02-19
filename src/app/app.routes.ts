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
    { path: 'home', component: HomeComponent, title: 'Home | My Portfolio' },
    { path: 'about', component: AboutComponent, title: 'About Me | My Portfolio' },
    { path: 'projects', component: ProjectsComponent, title: 'My Work | My Portfolio' },
    { path: 'contact', component: ContactComponent, title: 'Contact Me | My Portfolio' },
    { path: 'skills', component: SkillsComponent, title: 'My Skills | My Portfolio' },
    // Redirect unknown paths to home
    { path: '**', component: NotFoundComponent, title: '404 - Not Found' }
];
