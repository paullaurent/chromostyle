import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  openMail(){
    let mailto="mailto:fabrication@chromostyle.fr?&subject=Prise%20de%20contact";
    window.open(mailto);
  }
  openMaps(){
    window.open("https://www.google.fr/maps/place/51+Rue+Charles+Coulomb,+37170+Chambray-lès-Tours/")
  }
}
