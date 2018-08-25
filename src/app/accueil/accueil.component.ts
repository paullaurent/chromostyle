import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  images=["../assets/carousel1.jpg","../assets/carousel2.jpg","../assets/carousel3.jpg"]
captions=["Une équipe du tonnerre","De vrais professionnels","Toujours à l\'écoute"];


}
