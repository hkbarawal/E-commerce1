import { Injectable } from "@angular/core";
import { Feature } from "../models/feature.model";
import { Products } from "../models/products.model";


@Injectable({
    providedIn:'root',
})

export class ProdFeatureService{
 
  featureProducts: Products[] = [
        new Products(1, 'adidas', '../../assets/images/products/f1.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(2, 'adidas', '../../assets/images/products/f2.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(3, 'adidas', '../../assets/images/products/f3.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(4, 'adidas', '../../assets/images/products/f4.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(5, 'adidas', '../../assets/images/products/f5.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(6, 'adidas', '../../assets/images/products/f6.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(7, 'adidas', '../../assets/images/products/f7.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(8, 'adidas', '../../assets/images/products/f8.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
    ];
    
    newArrivalProducts: Products[] = [
        new Products(9, 'adidas', '../../../assets/images/products/n1.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(10, 'adidas', '../../../assets/images/products/n2.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(11, 'adidas', '../../../assets/images/products/n3.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(12, 'adidas', '../../../assets/images/products/n4.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(13, 'adidas', '../../../assets/images/products/n5.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(14, 'adidas', '../../../assets/images/products/n6.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(15, 'adidas', '../../../assets/images/products/n7.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
        new Products(16, 'adidas', '../../../assets/images/products/n8.jpg', 'Cartoon Astronaut T-Shirts', 78, [5, 5, 5, 5, 5]),
    ];

    featuresList: Feature[] = [
        new Feature(1, '../../../assets/images/features/f1.png', 'Free Shipping'),
        new Feature(2, '../../../assets/images/features/f2.png', 'Online Order'),
        new Feature(3, '../../../assets/images/features/f3.png', 'Save Money'),
        new Feature(4, '../../../assets/images/features/f4.png', 'Promotions'),
        new Feature(5, '../../../assets/images/features/f5.png', 'Happy Sell'),
        new Feature(6, '../../../assets/images/features/f6.png', '24/7 Support'),
    ];
}