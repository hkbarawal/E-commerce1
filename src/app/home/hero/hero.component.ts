import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit{

  @ViewChild('hero') hero?:ElementRef;

  ngAfterViewInit() {
  const images = [
    '../../../assets/images/hero/hero11.jpg',
    '../../../assets/images/hero/hero12.jpg',
    '../../../assets/images/hero/hero13.jpg',
    '../../../assets/images/hero/hero14.jpg',
    '../../../assets/images/hero/hero15.jpg',
  ];
  let currentIndex = 0; 
  let he = this.hero?.nativeElement;
  function changeBackground() {
    currentIndex = (currentIndex + 1 ) % images.length; 
    he.style.backgroundImage = `url(${images[currentIndex]})`;
  }  
  setInterval(changeBackground, 5000);
}
}
