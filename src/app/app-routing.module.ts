import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentionsComponent } from './mentions/mentions.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PhotogravureComponent } from './photogravure/photogravure.component';
import { EquipeComponent } from './equipe/equipe.component';
import { EmailComponent } from './email/email.component';
 

 
const routes: Routes = [
  { path: 'mentions-legales', component:MentionsComponent},
  { path: 'photogravure', component:PhotogravureComponent},
  // { path: 'equipe', component:EquipeComponent},
  { path: 'nous-contacter', component:EmailComponent},
  { path : '', component:AccueilComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', component: NotfoundComponent},
  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}