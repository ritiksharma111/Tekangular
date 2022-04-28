import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent{
      
constructor(private router: Router) {

  console.log(">>>>>>>>>>>>>>>>>>>>>", this.cakedata)
 }
 showCakeDetails(){
   this.router.navigate(['/detail',this.cakedata.cakeid])
 }

  ngOnInit(): void {
    console.log(">>>>>>>>>>>>> .....................", this.cakedata)
  }

  @Input() cakedata:any

}
