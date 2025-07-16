import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewsletterComponent } from "../home/newsletter/newsletter.component";
import { Product1Component } from "../home/product1/product1.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NewsletterComponent, Product1Component],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements AfterViewInit{
@ViewChild('pageheader') pageHeader?:ElementRef;

ngAfterViewInit(){
  const images = [
    '../../assets/images/banner/b32.jpg',
    '../../assets/images/banner/b33.jpg',
    '../../assets/images/banner/b34.jpg',
    '../../assets/images/banner/b35.jpg',
  ];
  let currentIndex = 0; 
  const page = this.pageHeader?.nativeElement;
  function changeBackground() {
    currentIndex = (currentIndex + 1 ) % images.length; 
    page.style.backgroundImage = `url(${images[currentIndex]})`;
  }  
  setInterval(changeBackground, 5000);
}
}
