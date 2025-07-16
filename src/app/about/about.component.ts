import { Component } from '@angular/core';
import { NewsletterComponent } from "../home/newsletter/newsletter.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NewsletterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
