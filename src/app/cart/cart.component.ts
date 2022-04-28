import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartitems: any = [];
  totalPrice: any = 0;

  constructor(private mainservice: MainserviceService, private router: Router) {
    var url = 'https://apifromashu.herokuapp.com/api/cakecart';
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append('authtoken', localStorage['token']);
    var options = {
      headers: myheaders,
    };
    var body = {};
    this.mainservice.getCartItems(url, body, options).subscribe({
      next: (response: any) => {
        console.log('Response from cart items api', response);
        this.cartitems = response.data;
        this.cartitems.forEach((each: any) => {
          this.totalPrice = this.totalPrice + each.price * each.quantity;
        });
      },
      error: (error) => {
        console.log('Error from cart items api', error);
      },
    });
  }

  checkout() {
    this.mainservice.cartitems = this.cartitems;
    this.mainservice.price = this.totalPrice;
    this.router.navigate(['/checkout']);
  }
  increaseQuantity(index: any) {
    // hit the api
    var url = 'https://apifromashu.herokuapp.com/api/addcaketocart';
    var myheaders = new HttpHeaders();
    myheaders = myheaders.append('authtoken', localStorage['token']);
    var options = {
      headers: myheaders,
    };

    this.mainservice
      .addCakeToCart(url, this.cartitems[index], options)
      .subscribe({
        next: (response: any) => {
          if (response.data) {
            this.totalPrice = this.totalPrice + this.cartitems[index].price;
            this.cartitems[index].quantity++;
          }
        },
        error: (error: any) => {
          console.log('error from decrease quantity api', error);
        },
      });
  }

  decreaseQuantity(index: any) {
    // hit the api
    var url = 'https://apifromashu.herokuapp.com/api/removeonecakefromcart';
    var myheaders = new HttpHeaders();
    myheaders = myheaders.append('authtoken', localStorage['token']);
    var options = {
      headers: myheaders,
    };
    var body = {
      cakeid: this.cartitems[index].cakeid,
    };

    this.mainservice.removeCakefromCart(url, body, options).subscribe({
      next: (response: any) => {
        console.log('Respose from remove one item api', response);
        this.totalPrice = this.totalPrice - this.cartitems[index].price;
        this.cartitems[index].quantity--;
      },
      error: (error: any) => {
        console.log('Errror fromapi  ,', error);
      },
    });
  }

  removeCakefromCart(index: any) {
    var url = 'https://apifromashu.herokuapp.com/api/removecakefromcart';
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append('authtoken', localStorage['token']);
    var options = {
      headers: myheaders,
    };
    var body = {
      cakeid: this.cartitems[index]['cakeid'],
    };
    this.mainservice.removeCakefromCart(url, body, options).subscribe({
      next: (response: any) => {
        console.log('Response from remove cake api', response);
        if (response.message == 'Removed whole cake  item from cart') {
          this.totalPrice =
            this.totalPrice -
            this.cartitems[index].quantity * this.cartitems[index].price;
          this.cartitems.splice(index, 1);
        }
      },
      error: (error: any) => {
        console.log('Error from remove cart api', error);
      },
    });
  }

  ngOnInit(): void {}
}
