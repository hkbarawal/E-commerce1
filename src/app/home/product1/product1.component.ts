import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdFeatureService } from '../../services/prodfeature.service';

@Component({
  selector: 'app-product1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product1.component.html',
  styleUrl: './product1.component.css'
})
export class Product1Component implements OnInit{
  router:Router = inject(Router);
  prodFeatureService:ProdFeatureService = inject(ProdFeatureService);
  products:any = [];

    ngOnInit(){

      this.products = this.prodFeatureService.featureProducts;
    }

    goToProduct(id:number) {
      this.router.navigate([`/Shop/Product/${id}`]);
    }
}
