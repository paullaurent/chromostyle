import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-photogravure',
  templateUrl: './photogravure.component.html',
  styleUrls: ['./photogravure.component.css']
})
export class PhotogravureComponent {
  canSeeButton="none";

  @HostListener("window:scroll", [])
  scroll(){
    if (window.scrollY>0){
      this.canSeeButton="block"
    }
    else{
      this.canSeeButton="none"
    }
  }

  goTop(){
    window.scroll(0,0)
  }

}
