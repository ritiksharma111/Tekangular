import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcakeComponent } from './addcake/addcake.component';
import { AddressComponent } from './address/address.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cakelist', component: CakelistComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'addcake', component: AddcakeComponent },
  { path: 'myorders', component: MyordersComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
    children: [
      { path: '', component: AddressComponent },
      { path: 'address', component: AddressComponent },
      { path: 'payment', component: PaymentComponent },
    ],
  },
  { path: 'search', component: SearchComponent },
  { path: 'detail/:cakeid', component: CakedetailComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
