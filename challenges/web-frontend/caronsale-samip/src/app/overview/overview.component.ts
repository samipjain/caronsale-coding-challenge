import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuctionsList } from '../auctions-list';
import { AuctionsListService } from '../auctions-list.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService, private auctionsListService: AuctionsListService) { }

  auctionList: AuctionsList;

  ngOnInit(): void {
    this.getAuctions()
  }

  getAuctions() {
    let limit = 5

    this.auctionsListService.getAuctions(limit).then((response) => {
      console.log(response)
      this.auctionList = response
    }, (error) => {
      console.log('Error from Overview page: ', error.message);
    })
  }

}
