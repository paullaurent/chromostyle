import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.css']
})
export class OnePageComponent {
@ViewChild('sidenav') sidenav: any
  toggle(){
    this.sidenav.toggle();
  }
}
