import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProdFeatureService } from '../../services/prodfeature.service';

@Component({
  selector: 'app-newarrivals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newarrivals.component.html',
  styleUrl: './newarrivals.component.css'
})
export class NewarrivalsComponent implements OnInit {
  prodFeature:ProdFeatureService = inject(ProdFeatureService);

  newArrivals:any = [];

  ngOnInit(){
    this.newArrivals = this.prodFeature.newArrivalProducts;
  }
}
