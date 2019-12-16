import { Component, OnInit,Input } from '@angular/core';
import { IQuote, emptyIQuote } from 'src/assets/data/quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  @Input() quote: IQuote = emptyIQuote;
  
  cover = "";

  constructor() { }

  ngOnInit() {
    this.cover = this.getCoverImage(this.quote);
  }

  getCoverImage(quote: IQuote) {
    return quote.media;
  }

}
