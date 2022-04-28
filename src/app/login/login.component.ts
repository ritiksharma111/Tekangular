import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdetails: any = {
    email: '',
    password: ''

  }
  users: any=[]

  constructor(private http: HttpClient, private router: Router) { }
  responseError:any
  login() {
    var temp = {...this.userdetails};
    this.users.push(temp);
    var url = "https://apifromashu.herokuapp.com/api/login"
  this.http.post(url,this.userdetails).subscribe({
    next:(response:any)=>{
      console.log("Response from login api", response)
      if(response.token){
        localStorage["token"] = response.token
        this.router.navigate(["/home"]);
      }
      else {
        this.responseError = "Invalid Login Credentials!"
      }
      this.userdetails.email = response.email,
      this.userdetails.password = response.password
    },
    error:(error)=>{
      console.log("Error from login api",error)
    }
  })

  }

  ngOnInit(): void {
  }

}
