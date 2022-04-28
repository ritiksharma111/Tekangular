import { Component, Input, OnInit } from '@angular/core';
import { MainserviceService } from '../mainservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  userdetails: any;
  totalprice: any;
  cakes: any;
  cartitems: any;
  orderdetails: any = {};

  constructor(
    private mainservice: MainserviceService,
    private http: HttpClient
  ) {
    this.cartitems = this.mainservice.cartitems;

    this.userdetails = this.mainservice.userdetails;

    this.totalprice = this.mainservice.price;
    this.cakes = this.cartitems;
  }

  placeorder() {
    var url = 'https://apifromashu.herokuapp.com/api/addcakeorder';
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append('authtoken', localStorage['token']);
    var options = {
      headers: myheaders,
    };
    var body = {
      cakes: this.cakes,
      price: this.totalprice,
      name: this.userdetails.name,
      address: this.userdetails.address,
      city: this.userdetails.city,
      pincode: this.userdetails.pincode,
      phone: this.userdetails.phone,
    };
    this.mainservice.placeOrder(url, body, options).subscribe({
      next: (response: any) => {
        console.log('Response from add cake order api', response);
        this.orderdetails = response.order;
      },
      error: (error: any) => {
        console.log('Error from place order api', error);
      },
    });
  }

  ngOnInit(): void {}
}
