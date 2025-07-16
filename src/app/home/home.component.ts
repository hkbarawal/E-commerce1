import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { FeatureComponent } from "./feature/feature.component";
import { Product1Component } from "./product1/product1.component";
import { BannerComponent } from "./banner/banner.component";
import { NewarrivalsComponent } from "./newarrivals/newarrivals.component";
import { SmBannerComponent } from "./sm-banner/sm-banner.component";
import { Banner3Component } from "./banner3/banner3.component";
import { NewsletterComponent } from "./newsletter/newsletter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeatureComponent, Product1Component, BannerComponent, NewarrivalsComponent, SmBannerComponent, Banner3Component, NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
