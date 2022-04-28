import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchitems: any = [];

  constructor(
    private route: ActivatedRoute,
    private mainservice: MainserviceService
  ) {
    this.route.queryParams.subscribe((query: any) => {
      var searchtext = query['q'];
      var url =
        'https://apifromashu.herokuapp.com/api/searchcakes?q=' + searchtext;
      this.mainservice.searchCakes(url).subscribe({
        next: (response: any) => {
          console.log('Response from search cakes api', response);
          this.searchitems = response.data;
        },
        error: (error) => {
          console.log('Error from search cakes api', error);
        },
      });
    });
  }

  ngOnInit(): void {}
}
