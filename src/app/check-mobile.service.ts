import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map, distinctUntilChanged, startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckMobileService {
  public isMobile:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
  private mobileMaxWidth: number=1000;
  getIsMobile(){
    return this.isMobile.asObservable();
  }
  public setIsMobile(isMobile:boolean){
    this.isMobile.next(isMobile);
  }
  constructor() { }
  CheckMobile(){
    if (window.innerWidth>this.mobileMaxWidth){
      return false;
    }
    else{
      return true;
    }
  }

  public check(){
    let _resize$ = fromEvent(window, 'resize')
    .pipe(
      map(() => window.innerWidth), //Don't use mapTo! 
      distinctUntilChanged(),
      startWith(window.innerWidth),
      tap(res => {
        this.setIsMobile(this.CheckMobile());
      })
    )
    _resize$.subscribe();
  }
}
