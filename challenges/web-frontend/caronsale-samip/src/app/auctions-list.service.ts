import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuctionsList } from './auctions-list';

@Injectable({
  providedIn: 'root'
})
export class AuctionsListService {

  constructor(private http: HttpClient) { }

  getAuctions = (limit: number): Promise<AuctionsList> => {
    let promise = new Promise<AuctionsList>((resolve, reject) => {
      this.http.get('https://caronsale-backend-service-dev.herokuapp.com/api/v1/public/preview/auctions?limit=' + limit)
        .toPromise()
        .then((response) => {
          resolve(response as AuctionsList)
        }, (error) => {
          reject(error)
        })
    })
    return promise
  }
}
