import { Component, Input, OnInit } from '@angular/core';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  userdetails: any = {};

  constructor(private mainservice: MainserviceService) {}

  addAddress() {
    this.mainservice.userdetails = this.userdetails;
  }

  ngOnInit(): void {}
}
