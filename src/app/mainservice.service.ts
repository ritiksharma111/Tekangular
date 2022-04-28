import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainserviceService {
  userdetails: any = {};
  cartDetails: any = {};
  cartitems: any;
  price: any;

  popularity(data: any) {
    data.sort((low, high) => {
      return high.popularity - low.popularity;
    });
    return data;
  }

  getCakedetails(url: any) {
    return this.http.get(url);
  }

  searchCakes(url: any) {
    return this.http.get(url);
  }

  addCakeToCart(url: any, body: any, options: any) {
    return this.http.post(url, body, options);
  }
  getCartItems(url: any, body: any, options: any) {
    return this.http.post(url, body, options);
  }
  uploadImage(url: any, body: any, options: any) {
    return this.http.post(url, body, options);
  }
  placeOrder(url: any, body: any, options: any) {
    return this.http.post(url, body, options);
  }

  getmyorders(url: any, body: any, options: any) {
    return this.http.post(url, body, options);
  }
  removeOneCakefromCart(url: any, body: any, options: any) {
    return this.http.post(url, body, options);
  }
  removeCakefromCart(url: any, body: any, options: any) {
    return this.http.post(url, body, options);
  }

  constructor(private http: HttpClient) {}
}
