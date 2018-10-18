import { Component, OnInit, Input } from '@angular/core';
import { CheckMobileService } from '../check-mobile.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  imagesURL=["../assets/carousel1.jpg"]
  captions=["Poste de retouches"];
  images=[];
  @Input() isMobile:boolean
  
  ngOnInit(){
    for (let i =0; i<this.imagesURL.length;i++){
      let image={
        url:this.imagesURL[i],
        caption: this.captions[i]
      }
      this.images.push(image);
    }
  }

 constructor(
   public cM: CheckMobileService
 ){}

}
