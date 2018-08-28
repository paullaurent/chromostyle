import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { carouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component'
import { AppRoutingModule } from './/app-routing.module';
import { MatIconModule,MatMenuModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { MentionsComponent } from './mentions/mentions.component';
import { AccueilComponent } from './accueil/accueil.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SlideshowModule} from 'ng-simple-slideshow';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SwipeService } from './slideshow/swipe.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    carouselComponent,
    FooterComponent,
    MentionsComponent,
    AccueilComponent,
    SlideshowComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    NgbModule,
    SlideshowModule
  ],
  exports:[
    SlideshowComponent
  ],
  providers: [SwipeService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }