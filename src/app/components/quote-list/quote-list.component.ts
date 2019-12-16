import { Component, OnInit } from '@angular/core';
import { IQuote, quotes } from 'src/assets/data/quotes';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {
  quotes: IQuote[] = quotes;
  filteredQuotes: IQuote[] = this.quotes;

  constructor() { }

  ngOnInit() {
  }

  filterQuotes(search: string) {
    this.filteredQuotes = this.quotes.filter((quote: IQuote) => {
      return quote.title.toLowerCase().includes(search.toLowerCase().trim());
    });
  }
}
