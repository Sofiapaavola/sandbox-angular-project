import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { IQuote, IUniformQuote } from "src/assets/data/quotes";
import { Subject } from "rxjs";

export interface IQuoteData {
  id: string;
  author: string;
  title: string;
  quote: string;
  mediaInfo?: IMediaInfo;
  cat?: string;
}

export interface IGoodQuoteResponse {
  quotes: IGoodQuoteData[]; 
}

export interface IGoodQuoteData {
  author: string; 
  media: string;
  quote: string; 
}

export interface IMediaInfo {
  type: string;
  format?: string;
}

export interface IQuote extends IQuoteData {
  id: string;
}

@Injectable({
  providedIn: 'root'
})

export class QuoteServiceService {
  author: Subject<string>;
  search: string;

  constructor(private httpClient: HttpClient) { this.author = new Subject(); }

  fetchQuoteBySearch(): any {
    const one = this.searchHealthThroughWords().then(res => res);
    const two = this.searchGoodQuotes().then(res => res);
    return one && two; 
  }

  searchHealthThroughWords() {
    const httpOptions = {
      headers: new HttpHeaders({
          "x-rapidapi-host": "healthruwords.p.rapidapi.com",
          "x-rapidapi-key": "2e833cf0f6mshe7bd37670112e95p1073a6jsnbe7548d95ab3"
      })
    };

    return this.httpClient
      .get(`https://healthruwords.p.rapidapi.com/v1/quotes/`, httpOptions)
      .toPromise()
      .then((res: IQuoteData) => {
          const { mediaInfo, id, author, title } = res;
          console.log(res[.0])
          return res[.0];
      })
      .catch((err: Error) => {
        console.log("Errror", err);
        throw err;
      });
  }

  searchGoodQuotes(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "good-quotes.p.rapidapi.com",
		    "x-rapidapi-key": "2e833cf0f6mshe7bd37670112e95p1073a6jsnbe7548d95ab3"
      })
    };
    return this.httpClient
      .get(`https://good-quotes.p.rapidapi.com/tag/wisdom`, httpOptions)
      .toPromise()
      .then((res: IGoodQuoteData): IUniformQuote => {
          const { media, author, quote } = res;
          console.log(res)
          return res;
      })
      .catch((err: Error) => {
        console.log("Errror", err);
        throw err;
      });

  }
}



// author: Subject<string>;
//   selectedBook: Subject<IBook | null>;

//   constructor(
//     private httpClient: HttpClient,
//     private favouriteService: FavouriteService
//   ) {
//    


// this.author = new Subject();
//     this.selectedBook = new Subject();
//   }


  // fetchBooks(author: string): any {
  //   return this.httpClient
  //     .get(
  //       "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
  //         author +
  //         "&maxResults=40&key:" +
  //         "AIzaSyBzAhdlRZ9hd3aOVRKTUzZW9KX06ncoimM"
  //     )
  //     .toPromise()
  //     .then((res: IResponse): IBook[] => {
  //       const books = res.items.map(item => {
  //         const { volumeInfo, id } = item;
  //         const {
  //           title,
  //           imageLinks,
  //           categories,
  //           pageCount,
  //           description,
  //           publishedDate
  //         } = volumeInfo;
  //         return {
  //           id,
  //           title,
  //           imageLinks,
  //           categories,
  //           pageCount,
  //           description,
  //           publishedDate
  //         };
  //       });
  //       return books;
  //     })
  //     .catch((err: Error) => {
  //       console.log(err);
  //       throw err;
  //     });
  // }