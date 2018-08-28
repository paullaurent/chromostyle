import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { interval, Observable } from 'rxjs';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class carouselComponent implements OnInit {
  @Input() images: string[];
  @Input() captions :string[];
  @ViewChild("#slideshow") slideshow: any;
  image: string;
  caption : string;
  numImage:number=0

  ngOnInit(): void {

    if (this.images) {
      this.image = this.images[0]
      this.caption=this.captions[0]
    }
    else {
      this.image = "../assets/chromostyle_logo.png"
    }
    let counter=interval(7000);
    counter.subscribe( res=>{
      this.nextImage()
    })
    
  }

  nextImage(){
    this.numImage++;
      if (this.numImage>this.images.length-1){
        this.numImage=0;
      }
      this.image=this.images[this.numImage];
      this.caption=this.captions[this.numImage];
  }
  
  previousImage($event){
    console.log("coucou")
    this.numImage--;
      if (this.numImage<0){
        this.numImage=this.images.length-1;
      }
      this.image=this.images[this.numImage];
      this.caption=this.captions[this.numImage];
  }
}

