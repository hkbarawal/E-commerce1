import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProdFeatureService } from '../../services/prodfeature.service';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent implements OnInit{

  prodFeature:ProdFeatureService = inject(ProdFeatureService);
  feature:any = [];
  ngOnInit(){
this.feature = this.prodFeature.featuresList;
  }
}
