import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
  @ViewChild('bar') bar ?:ElementRef;
  @ViewChild('navbar') nav ?:ElementRef;
  @ViewChild('close') close ?:ElementRef;

  ngAfterViewInit() {
    if (this.bar && this.nav) {
      this.bar.nativeElement.addEventListener('click', () => {
        this.nav?.nativeElement.classList.add('active');
      });
    }

    if (this.close && this.nav) {
      this.close.nativeElement.addEventListener('click', () => {
        this.nav?.nativeElement.classList.remove('active');
      });
    }
  }

}
