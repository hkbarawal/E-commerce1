import { Component } from '@angular/core';
import { NewsletterComponent } from "../home/newsletter/newsletter.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NewsletterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
