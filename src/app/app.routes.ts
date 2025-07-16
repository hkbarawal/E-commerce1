import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
    {path:"Home",component:HomeComponent},
    {path:"Shop",component:ShopComponent},
    {path:"About",component:AboutComponent},
    {path:"Cart",component:CartComponent},
    {path:"Blog",component:BlogComponent},
    {path:"Contact",component:ContactComponent},
    { path: "Shop/Product/:id", component: ProductComponent }];
