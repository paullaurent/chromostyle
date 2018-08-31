import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  imagesURL=["../assets/carousel1.jpg","../assets/carousel2.jpg","../assets/carousel3.jpg","../assets/carousel4.jpg"]
  captions=["Une équipe du tonnerre","De vrais professionnels","Toujours à l\'écoute"];
  images=[];

  ngOnInit(){
    for (let i =0; i<this.imagesURL.length;i++){
      let image={
        url:this.imagesURL[i],
        caption: this.captions[i]
      }
      this.images.push(image);
    }
  }

}
