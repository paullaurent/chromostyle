import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentionsComponent } from './mentions/mentions.component';
import { AccueilComponent } from './accueil/accueil.component';
 

 
const routes: Routes = [
  { path: 'mentions-legales', component:MentionsComponent},
  { path : '', component:AccueilComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}