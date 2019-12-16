import { Component, OnInit } from '@angular/core';
import { IQuote, QuoteServiceService } from 'src/app/services/quote-service.service';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  quotes: IQuote[] = [];
  filteredList: IQuote[] = this.quotes;
  subscriptions: Subscription[] = [];


  constructor(  private quoteService: QuoteServiceService,
    private router: Router) { }

  ngOnInit() {
    this.subscriptions.push(
      this.quoteService.author.subscribe(author => {
        this.getQuotes(author);
      }),
    );
  }

  getQuotes(author: string): void {
    this.quoteService.fetchQuoteBySearch(author).then((res: IQuote[]) => {
    
      this.filteredList = this.quotes;

    });
  }

  //   this.initialiseValues(this.books);
}
