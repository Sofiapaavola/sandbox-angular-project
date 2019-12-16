import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IQuote } from "src/assets/data/quotes";

interface IQuoteResponse {
  author: string;
  media: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})

export class QuoteServiceService {

  constructor(private httpClient: HttpClient) {}

  fetchQuoteBySearch(search: string): Promise<IQuote> {
    return this.httpClient
      .get(`https://healthruwords.p.rapidapi.com/?apikey=3b7d6308c3mshe219e178ecadd6dp155b94jsn52c06c7ab7a2=${search}`)
      .toPromise()
      .then((data: IQuoteResponse) => {
        const id = Math.floor(Math.random() * 10).toString();
        const { title, media, author } = data;
        return { title, media, id, author } as IQuote;
      })
      .catch((err: Error) => {
        throw err;
      });
  }
}
