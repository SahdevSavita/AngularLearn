import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProtfolioComponent } from './components/protfolio/protfolio.component';
import { ContactComponent } from './components/contact/contact.component';


export const routes: Routes = [
 {
    path:"",
    component:AboutComponent
 },
 {
    path:"service",
    component:ServiceComponent
 },
 {
    path:"skills",
    component:SkillsComponent
 },
 {
    path:'protfolio',
    component:ProtfolioComponent
 },

 
 {
    path:'contact',
    component:ContactComponent
 }

];
