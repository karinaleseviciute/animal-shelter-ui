import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt:string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 30000;

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }
// changes slide in every 3 sec
  autoSlideImages(){
    setInterval(()=>{
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(index: number):void{
    this.selectedIndex = index;
  }

  onPrevClick(){
    if(this.selectedIndex===0){
      this.selectedIndex = this.images.length - 1;
    } else{
      this.selectedIndex--;
    }
  }

  onNextClick(){
    if(this.selectedIndex===this.images.length - 1){
      this.selectedIndex = 0;
    } else{
      this.selectedIndex++;
    }
  }

}
