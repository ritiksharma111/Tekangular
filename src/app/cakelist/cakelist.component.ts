import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { MainserviceService } from '../mainservice.service';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {

  constructor(private mainservice: MainserviceService, private notifySevice: NotificationService, private http: HttpClient, private loader:NgxUiLoaderService, private router: Router ) { 
    var url = "https://apifromashu.herokuapp.com/api/allcakes"
  this.http.get(url).subscribe({
    next:(response:any)=>{
      console.log("Response from all cakes api", response)
      this.cakes = response.data
    },
    error:(error)=>{
      console.log("Error from all cakes api",error)
    }
  })

  }

  lowToHigh() {
    this.cakes.sort(function(low,high){
      return low.price - high.price;
    })
  }
  highToLow() {
    this.cakes.sort(function(low,high){
      return high.price - low.price;
    })
  }
  showToasterSuccess(){
    this.notifySevice.showSuccess(
      'Data Sorted',
      "Successfully"
    )
  }

  popularity(){
    this.mainservice.popularity(this.cakes)
  }

  cakes:any =[]

  

  ngOnInit(): void {
  }

}
