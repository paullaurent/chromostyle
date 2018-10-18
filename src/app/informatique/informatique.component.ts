import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informatique',
  templateUrl: './informatique.component.html',
  styleUrls: ['./informatique.component.css']
})
export class InformatiqueComponent {
@Input() isMobile:boolean
}
