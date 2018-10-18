import { Component, OnInit, ViewChild } from '@angular/core';
import {map, debounceTime, distinctUntilChanged, startWith, tap} from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { CheckMobileService } from './check-mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('sidenav') sidenav:any;
  isMobile:boolean;
  constructor(
    public cM:CheckMobileService
  ){}
  ngOnInit(){
           //handle resizing
           fromEvent(window, 'resize')
           .pipe(
             debounceTime(200),
             map(() => window.innerWidth), //Don't use mapTo! 
             distinctUntilChanged(),
             startWith(window.innerWidth),
             tap(res => {
               this.cM.setIsMobile(this.cM.CheckMobile());
               this.cM.getIsMobile().subscribe(res=>this.isMobile=res);
             })
           ).subscribe()
  }

}
