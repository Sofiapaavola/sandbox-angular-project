import { Component, OnInit,Input } from '@angular/core';
import { IQuote } from 'src/assets/data/quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  @Input() quote: IQuote;
  altText: string;

  constructor() { }

  ngOnInit() {
    this.altText = this.quote + "'s poster";
  }

}
