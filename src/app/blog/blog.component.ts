import { Component } from '@angular/core';
import { NewsletterComponent } from "../home/newsletter/newsletter.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NewsletterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
