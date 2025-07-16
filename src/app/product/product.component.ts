import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NewsletterComponent } from "../home/newsletter/newsletter.component";
import { Product1Component } from "../home/product1/product1.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NewsletterComponent, Product1Component],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements AfterViewInit {
  @ViewChild('MainImg') MainImg?:ElementRef<HTMLImageElement>;
  @ViewChildren('smallimg') smallimg?: QueryList<ElementRef<HTMLImageElement>>;
  
ngAfterViewInit(){
  this.smallimg?.forEach((imgRef: ElementRef<HTMLImageElement>) => {
    imgRef.nativeElement.addEventListener('click', () => {
      if (this.MainImg) {
        this.MainImg.nativeElement.src = imgRef.nativeElement.src;
      }
    });
  });
}
}
