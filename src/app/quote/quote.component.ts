import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Maya Angelou', 'People will forget what you', new Date(2019, 3, 14)),
    new Quote(1, 'William Blake', 'if a thing Loves,it is infinity', new Date(2019, 3, 14)),
    new Quote(1, 'Emily Dickinson', 'The soul should stand ajar, ready to welcome the ecstatic experience', new Date(2019, 3, 14)),
  ];
  addNewQuote(quote) {
        const quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        quote.completeDate = new Date(quote.completeDate);
        this.quotes.push(quote);

    }
  showQuote(index) {
    this.quotes[index].showDesc = !this.quotes[index].showDesc;
    console.log(this.showQuote);
  }
  quoteDelete(isDelete, index) {
    if (isDelete) {
      const toDelete = confirm(`Are you sure you want to DELETE ${this.quotes[index].author} `);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
