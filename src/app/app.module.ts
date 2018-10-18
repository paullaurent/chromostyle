import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { carouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component'
import { AppRoutingModule } from './/app-routing.module';
import { MatIconModule,MatMenuModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatCardModule, MatListModule, MatDividerModule, MatInputModule, MatStepperModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MentionsComponent } from './mentions/mentions.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SwipeService } from './slideshow/swipe.service';
import { TransferState } from '@angular/platform-browser';
import { NotfoundComponent } from './notfound/notfound.component';
import { PhotogravureComponent } from './photogravure/photogravure.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EquipeComponent } from './equipe/equipe.component';
import { EmailComponent } from './email/email.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from "@angular/flex-layout";
import { OnePageComponent } from './one-page/one-page.component';
import { PublicationComponent } from './publication/publication.component';
import { InformatiqueComponent } from './informatique/informatique.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    carouselComponent,
    FooterComponent,
    MentionsComponent,
    AccueilComponent,
    SlideshowComponent,
    NotfoundComponent,
    PhotogravureComponent,
    EquipeComponent,
    EmailComponent,
    OnePageComponent,
    PublicationComponent,
    InformatiqueComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    HttpClientModule,
    MatInputModule,
    MatStepperModule,
    FormsModule,
    MatSelectModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports:[
    SlideshowComponent
  ],
  providers: [SwipeService,
    TransferState],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
