import { Component, OnInit } from '@angular/core';
import { IQuote } from 'src/assets/data/quotes';
import { QuoteServiceService } from "src/app/services/quote-service.service";

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent implements OnInit {
  quote: IQuote;
  search: string;

  constructor(private quoteService: QuoteServiceService) { }

  ngOnInit() {
  }

  searchQuote() {
    this.quoteService.fetchQuoteBySearch(this.search).then((quote: IQuote) => {
      this.quote = quote;
    });
  }
  }

