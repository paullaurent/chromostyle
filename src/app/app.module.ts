import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { carouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component'
import { AppRoutingModule } from './/app-routing.module';
import { MatIconModule,MatMenuModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatCardModule, MatListModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { MentionsComponent } from './mentions/mentions.component';
import { AccueilComponent } from './accueil/accueil.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SwipeService } from './slideshow/swipe.service';
import { TransferState } from '@angular/platform-browser';
import{ NotfoundComponent } from './notfound/notfound.component';
import { PhotogravureComponent } from './photogravure/photogravure.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    PhotogravureComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports:[
    SlideshowComponent
  ],
  providers: [SwipeService,
    TransferState],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
